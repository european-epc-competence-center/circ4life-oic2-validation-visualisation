#!/usr/bin/env bash

set -e

cd backend/
mvn clean install
scp -P 9102 target/*.jar debian@116.202.115.133:oic-backend.jar
ssh -p 9102 debian@116.202.115.133 "killall -q java > /dev/null 2>&1 || true; nohup java -jar oic-backend.jar > oic-backend.log 2>&1 &"
