#!/usr/bin/env bash

git config --global http.proxy socks5://127.0.0.1:1081
git config --global https.proxy socks5://127.0.0.1:1081
git push origin master
git config --global --unset http.proxy
git config --global --unset https.proxy