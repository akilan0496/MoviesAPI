#!/usr/bin/env bash
if [ ! -z "$DEPLOYMENT_GROUP_NAME" ]; then
 export NODE_ENV=$DEPLOYMENT_GROUP_NAME
fi

pm2 start /home/ubuntu/moviesAPI/bin/www.js -n www -i 0
