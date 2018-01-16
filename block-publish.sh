#!/bin/bash
LOCALHOST=http://localhost:3000
while getopts u:h:b: option
do
 case "${option}"
 in
 u) USERNAME=${OPTARG};;
 b) IFS=','
    array=(${OPTARG});;
 h) HOST=$OPTARG;;
 esac
done

for block in "${array[@]}"; do
  echo -n "${block}-"
done

wm-cli login -u $USERNAME -h $HOST && (
  for block in "${array[@]}"; do
    git checkout "w/zapdos/${block}" && (
      git pull origin "w/zapdos/${block}"
      REPLACED=${HOST//:/.}
      CONFIG_FILE="block.${REPLACED//\/\//}"

      if [  ! -e "./$CONFIG_FILE" ];then
        #read data from init.json
        echo "INIT BLOCK ${block}"
        CATEGORY="$(jq '.category' ./package.json)"
        NAME="$(jq '.name' ./package.json)"
        ENTRYPOINT="./src/index.js"

        wm-cli block init --name=${NAME//\"} --categories=${CATEGORY//\"} --entrypoint=./${ENTRYPOINT//\"} wireframe true
        # if [$HOST -ne LOCALHOST];then
          git add $CONFIG_FILE
          git commit -m "init block, add ${CONFIG_FILE} file"
        # fi
      fi

      wm-cli block commit
      wm-cli block publish


      echo "block ${block} published"
    )
  done
  git checkout w/master
)
