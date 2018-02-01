#!/bin/bash
LOCALHOST=http://localhost:3000
while getopts u:h:b:e:n:t: option
do
 case "${option}"
 in
 u) USERNAME=${OPTARG};;
 e) ENV=${OPTARG};;
 n) NAMESPACE=${OPTARG};;
 t) TYPE=${OPTARG};;
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
    BRANCH="${TYPE}/${NAMESPACE}/${block}/${ENV}"
    git checkout $BRANCH && (
      git pull origin $BRANCH
      npm i
      git reset --hard "origin/${BRANCH}"
      REPLACED=${HOST//:/.}
      CONFIG_FILE="block.${REPLACED//\/\//}"

      if [  ! -e "./$CONFIG_FILE" ];then
        #read data from init.json
        echo "INIT BLOCK ${block}"
        CATEGORY="$(jq '.category' ./package.json)"
        NAME="$(jq '.name' ./package.json)"
        ENTRYPOINT="./src/index.js"
        WIREFRAME=true

        if [ "$TYPE" != "w" ];then
          WIREFRAME=false
        fi

        wm-cli block init --name=${NAME//\"} --categories=${CATEGORY//\"} --entrypoint=./${ENTRYPOINT//\"} --wireframe=$WIREFRAME
        if [ $HOST != $LOCALHOST ];then
          git add -f $CONFIG_FILE
          git commit -m "init block, add ${CONFIG_FILE} file"
          git push origin $BRANCH
        fi  
      fi

      wm-cli block commit
      wm-cli block publish


      echo "block ${block} published"
    )
  done
  git checkout block-publish
)
