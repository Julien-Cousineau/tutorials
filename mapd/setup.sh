sudo apt update
sudo apt upgrade
sudo apt install apt-transport-https
sudo reboot
sudo useradd -U mapd
sudo ufw disable
sudo ufw allow 9092/tcp
sudo ufw allow ssh
sudo ufw enable
sudo apt install curl
curl https://releases.mapd.com/ce/mapd-ce-cpu.list | sudo tee /etc/apt/sources.list.d/mapd.list
curl https://releases.mapd.com/GPG-KEY-mapd | sudo apt-key add -
sudo apt update
sudo apt install -y mapd

vim ~/.bashrc
copy the following at the end of file
export MAPD_USER=mapd
export MAPD_GROUP=mapd
export MAPD_STORAGE=/var/lib/mapd
export MAPD_PATH=/opt/mapd

source ~/.bashrc
cd $MAPD_PATH/systemd
sudo ./install_mapd_systemd.sh

cd $MAPD_PATH
sudo systemctl start mapd_server
sudo systemctl start mapd_web_server
sudo systemctl enable mapd_server
sudo systemctl enable mapd_web_server

cd $MAPD_PATH
sudo ./insert_sample_data
2

$MAPD_PATH/bin/mapdql
HyperInteractive