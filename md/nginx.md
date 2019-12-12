https://medium.com/@utkarsh_verma/configure-nginx-as-a-web-server-and-reverse-proxy-for-nodejs-application-on-aws-ubuntu-16-04-server-872922e21d38

sudo nginx -t
sudo systemctl stop nginx
sudo systemctl start nginx
sudo systemctl restart nginx
sudo systemctl reload nginx
sudo /etc/init.d/nginx reload  

sudo cp nginx.conf /etc/nginx/nginx.conf 

Server Configuration
/etc/nginx: The Nginx configuration directory. All of the Nginx configuration files reside here.
/etc/nginx/nginx.conf: The main Nginx configuration file. This can be modified to make changes to the Nginx global configuration.
/etc/nginx/sites-available/: The directory where per-site "server blocks" can be stored. Nginx will not use the configuration files found in this directory unless they are linked to the sites-enabled directory (see below). Typically, all server block configuration is done in this directory, and then enabled by linking to the other directory.
/etc/nginx/sites-enabled/: The directory where enabled per-site "server blocks" are stored. Typically, these are created by linking to configuration files found in the sites-available directory.
/etc/nginx/snippets: This directory contains configuration fragments that can be included elsewhere in the Nginx configuration. Potentially repeatable configuration segments are good candidates for refactoring into snippets.

Server Logs
/var/log/nginx/access.log: Every request to your web server is recorded in this log file unless Nginx is configured to do otherwise.
/var/log/nginx/error.log: Any Nginx errors will be recorded in this log.

https://mozilla.github.io/server-side-tls/ssl-config-generator/


SSL Setup
https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-nginx-in-ubuntu-16-04
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt
sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048

server_name ec-meit-dev.ca;

sudo ufw allow 'Nginx Full'


https://www.digitalocean.com/community/tutorials/how-to-set-up-let-s-encrypt-with-nginx-server-blocks-on-ubuntu-16-04

sudo ufw allow 443/tcp


sudo apt-get install software-properties-common
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install certbot
sudo certbot certonly --webroot --agree-tos --no-eff-email --email julien.cousineau@nrc.ca -w /etc/nginx/ssl/ -d www.ec-meit.ca -d ec-meit.ca
sudo cp /etc/letsencrypt/live/www.ec-meit.ca/privkey.pem /etc/nginx/ssl/privkey.pem
sudo cp /etc/letsencrypt/live/www.ec-meit.ca/fullchain.pem /etc/nginx/ssl/fullchain.pem
sudo cp /etc/letsencrypt/live/www.ec-meit.ca/cert.pem /etc/nginx/ssl/cert.pem
sudo cp /etc/letsencrypt/live/www.ec-meit.ca/chain.pem /etc/nginx/ssl/chain.pem