#!/usr/bin/env bash
set -e

# update instance
apt-get -y update

# install general libraries like Java or ImageMagick
apt-get -y install default-jre ImageMagick

# add nodejs to apt-get
curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
apt-get -y install nodejs

# install pm2 module globaly
npm install -g pm2
pm2 update