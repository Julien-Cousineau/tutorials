# Installation and configuration
```bash
# Standard
sudo apt-get update
sudo apt-get install -y build-essential git htop zip python-dev


wget https://bootstrap.pypa.io/get-pip.py
sudo python get-pip.py
sudo pip install --upgrade six
sudo pip install azure-storage
sudo pip install futures

# Compilers
sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt-get update
sudo apt-get -y install libssl-dev libffi-dev  gcc-4.8 g++-4.8

# GIS Stuff
sudo add-apt-repository ppa:ubuntugis/ppa
sudo apt-get update
sudo apt-get install -y gdal-bin python-gdal

# Tippecanoe
sudo apt-get -y install git build-essential libsqlite3-dev zlib1g zlib1g-dev
sudo git clone https://github.com/mapbox/tippecanoe.git
cd tippecanoe
sudo make
sudo make install

# Postgres 

```
curl "https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/url-https%3A%2F%2Fmapbox.com%2Fimg%2Frocket.png(-76.9,38.9)/-76.9,38.9,15/1000x1000?access_token=pk.eyJ1IjoianVsaWVuY291c2luZWF1IiwiYSI6ImNpc2h1OHN2bjAwNzMyeG1za3U0anczcTgifQ.KCp_hDxNidB1n29_yBPXdg"
curl "https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/pin-s+2196F3(-76.0,45.0)/-76.0,45.0,10/1000x1000?access_token=pk.eyJ1IjoianVsaWVuY291c2luZWF1IiwiYSI6ImNpc2h1OHN2bjAwNzMyeG1za3U0anczcTgifQ.KCp_hDxNidB1n29_yBPXdg" --output test.png
# Add script to environment
```bash
Add path to: 
export PATH="$PATH:~/workspace/slf-py/src"
export PYTHONPATH=~/workspace/slf-py/src
source ~/.profile
chmod +x xxxx.py 

xxx.py

# Tippecanoe
tippecanoe -o output.mbtiles -l output -Bg -Z 4 -z 12 input.json
