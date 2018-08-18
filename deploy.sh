#!/bin/bash

npm run build
cd ./dist
if [ "${PWD##*/}" == "dist" ];
then
    git init
    git add -A
    git commit -m 'push by script'
    git remote add origin https://github.com/elvisleung222/elvisleung222.github.io.git
    git push -u origin master
fi
cd ../