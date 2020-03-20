
# Connect Github with AWS
From laptop, copy `id_rsa.pub` and `id_rsa` in the `~./ssh`  folder
sudo chmod 600 ~/.ssh/id_rsa
sudo chmod 600 ~/.ssh/id_rsa.pub

# Starting new project ...
```bash
git init
git remote add origin git@github.com:Julien-Cousineau/MNRF.git
git remote set-url origin git@github.com:Julien-Cousineau/MNRF.git
git pull origin master

cp ~/workspace/tutorials/github/template/createFolders_lib.sh ./createFolders_lib.sh
cp ~/workspace/tutorials/github/template/README.md ./README.md
cp ~/workspace/tutorials/github/template/push.sh ./push.sh

chmod +x ./createFolders_lib.sh
chmod +x ./push.sh
./createFolders_lib.sh
./push.sh

export PATH=$PATH:~/workspace/slf-py/src
EXPORT PYTHONPATH=$PYTHONPATH:~/workspace/slf-py/src

for MNRF
git init
git remote add origin git@github.com:Julien-Cousineau/MNRF.git
git fetch

git pull
```
# Simple Command
```bash
# Initilized git repo
git --bare init
git remote add origin git@github.com:Julien-Cousineau/slf-js.git
git remote set-url origin git@github.com:Julien-Cousineau/slf-js.git

# Pull git repo
git pull origin master

# Push git repo
# all files and folders
git add . 
git commit -m "comment here"
git push -u origin master

# Pull git repo
git fetch --all;git reset --hard origin/master;git pull origin master;



# Push specific files
git add README.md setup.sh process/*.py process/sql/*.sql server/api/*.js server/api/*.json server/*.sh

# Ignore files/folders
touch .gitignore
# In .gitignore
/folder

#
git checkout -b branchname


```

# Installation
```bash
sudo apt-get install -y git
git config --global user.name "jcousineau"
git config --global user.email "julien.cousineau@gmail.com"
```
# NPM
```bash
npm set init.author.name "Julien Cousineau"
npm set init.author.email "julien.cousineau@google.com"


npm adduser


cd /path/to/your-project
npm init

npm install -g pakmanager
# this shows you dependencies as you `require`d them
pakmanager deps
# now edit `package.json` and add any deps you forgot about

npm publish ./

npm update slf-js

```

## Connecting to GitHub with SSH
Check https://help.github.com/articles/connecting-to-github-with-ssh/
```
ssh-keygen -t rsa -b 4096 -C "julien.cousineau@gmail.com"
```
* Add the SSH key to your GitHub account 
* Open GitHub account -> Settings -> SSH -> Add SSH
* Change Title
* Add key


## Remove folders from repo
git rm -r /c9 --cached
