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