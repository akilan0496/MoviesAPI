#!/usr/bin/env bash
echo "install.sh started"

echo "install.sh step1"

# update instance
apt-get -y update

echo "install.sh step2"

# install general libraries like Java or ImageMagick

apt-get -y install default-jre ImageMagick

echo "install.sh step3"

# add nodejs to apt-get
curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -

echo "install.sh step4"

apt-get -y install nodejs

apt install nodejs-legacy

apt install npm

echo "install.sh step5"
# install pm2 module globaly

echo "install.sh step6"
npm install -g pm2

echo "install.sh step7"
pm2 update

echo "install.sh completed"