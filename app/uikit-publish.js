#!/usr/bin/env node
const yargs = require("yargs");
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

yargs
  .option("username", {
    alias: "u",
    desc: "Username",
    global: true,
    string: true,
    demandOption: true
  })
  .option("password", {
    alias: "p",
    desc: "Password",
    global: true,
    string: true,
    demandOption: true
  })
  .option("host", {
    alias: "h",
    desc: "Server host (http://weblium.com)",
    global: true,
    string: true,
    demandOption: true
  })
  .option("environment", {
    alias: "e",
    desc: "Environment (dev|prod)",
    global: true,
    string: true,
    choises: ["dev", "prod"],
    demandOption: true
  })
  .option("uikit", {
    alias: "k",
    desc: "Uikit",
    global: true,
    string: true,
    demandOption: true
  })
  .wrap(yargs.terminalWidth());

const argv = yargs.argv;

execSync(`git remote update origin --prune`);

const branches = execSync(`git branch -r`)
  .toString()
  .trim()
  .split("\n")
  .map(branch => branch.trim())
  .map(branch => branch.split("/"))
  .map(branch => branch.slice(1, Infinity))
  .filter(branch => branch[branch.length - 1] === argv.environment);

const uikit = branches
  .filter(branch => branch[0] === "uikit")
  .find(branch => branch[1] === argv.uikit);

if (!uikit) {
  console.error(`There is no uikit with name ${argv.uikit}`);
  process.exit(1);
}

const options = [
  ["-u", argv.username],
  ["-p", argv.password],
  ["-h", argv.host]
]
  .filter(option => option[1])
  .map(option => option.join(" "));

execSync(["wm-cli login"].concat(options).join(" "));

const blocks = branches
  .filter(branch => branch[0] === "d")
  .filter(branch => branch[1] === argv.uikit);

blocks.map(block => block.join("/")).forEach(block => {
  execSync(`git checkout ${block}`);
  execSync(`git pull origin ${block}`);
  const configFile = `block.${argv.host.replace("://", ".")}`;
  if (!fs.existsSync(path.resolve(process.cwd(), configFile))) {
    console.log(`init block ${block}`);
    const packageJson = JSON.parse(
      fs.readFileSync(path.resolve(process.cwd(), `package.json`)).toString()
    );
    const categories = packageJson.category;
    const name = packageJson.name;
    const entrypoint = "./src/index.js";
    execSync(`wm-cli block init --name=${name} --categories=${categories} --entrypoint=${entrypoint}`);
    if (argv.host !== "http://localhost:3000" && argv.host !== "http://weblium") {
      execSync(`git add -f ${configFile}`);
      execSync(`git commit -m "init block, add ${configFile} file"`);
      execSync(`git push origin ${block}`);
    }
  }
  execSync(`wm-cli block commit`);
  execSync(`wm-cli block publish`);
  console.log(`block ${block} published`);
});

execSync(`git checkout block-publish`);
