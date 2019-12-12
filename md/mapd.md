sudo systemctl start mapd_server
sudo systemctl start mapd_web_server
sudo systemctl enable mapd_server
sudo systemctl enable mapd_web_server

cd $MAPD_STORAGE 
sudo cp $MAPD_STORAGE/mapd.conf ~/mapd.conf
sudo cp ~/mapd.conf $MAPD_STORAGE/mapd.conf

sudo chmod 667 mapd.conf