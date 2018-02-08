#!/usr/bin/env bash

if [ $(basename `pwd`) != "templates" ];then
    echo "[Error] Please do this in the templates directory!"
    exit
fi
if [ ! -d "kico" ]; then
    git clone https://github.com/SilverBlogTheme/kico.git --depth 1
    ln -s ../kico/static ../static/kico
    echo "Remember, if you want to make local changes, edit files in /templates/kico/source folder, then use gulp to build static files!"
fi
