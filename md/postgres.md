# Installation and configuration
```bash
sudo add-apt-repository ppa:ubuntugis/ppa
sudo apt-get update
sudo apt-get install -y build-essential libssl-dev libffi-dev python-dev postgresql-9.3-postgis-2.2 postgis python-psycopg2 gdal-bin python-gdal 

sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt-get update
sudo apt-get -y install gcc-4.8 g++-4.8


sudo cp postgresql.conf /etc/postgresql/9.3/main/postgresql.conf
sudo cp /etc/postgresql/9.3/main/postgresql.conf postgresql.conf

sudo service postgresql stop
sudo service postgresql start
sudo service postgresql restart

sudo -u postgres createuser --interactive cousineauju
y
sudo -u cousineauju psql postgres
\password
\password
\q

createdb "ecmeit"
psql -c "CREATE EXTENSION postgis; CREATE EXTENSION postgis_topology;" ecmeit
```