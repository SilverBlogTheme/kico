#!/usr/bin/env bash

echo """Host git.reallserver.cn
    Hostname git.reallserver.cn
    Port 22
    User git
    IdentityFile ~/.ssh/id_rsa
    ProxyCommand nc -x 127.0.0.1:1081 %h %p""" >> ~/.ssh/config