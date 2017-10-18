# Installation
sudo apt-get install -y git
git config --global user.name "jcousineau"
git config --global user.email "julien.cousineau@gmail.com"


git --bare init
https://github.com/settings/keys
new SSH key
Add title
ssh-keygen -t rsa -b 4096
copy .pub to ssH
git remote add origin git@github.com:Julien-Cousineau/nissi.git
git remote set-url origin git@github.com:Julien-Cousineau/nissi.git
git pull origin master