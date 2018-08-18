#!/bin/bash

npm run build
cd ./build
git init
git add -A
git commit -m 'push by script'
git remote add origin https://github.com/elvisleung222/elvisleung222.github.io.git
git push -u origin master