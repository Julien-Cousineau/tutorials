# Starting new project ...
```bash
git init
git remote add origin git@github.com:Julien-Cousineau/slf-py.git
git remote set-url origin git@github.com:Julien-Cousineau/slf-py.git
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
```
# Simple Command
```bash
# Initilized git repo
git --bare init
git remote add origin git@github.com:Julien-Cousineau/XXXX.git
git remote set-url origin git@github.com:Julien-Cousineau/XXXX.git

# Pull git repo
git pull origin master

# Push git repo
# all files and folders
git add . 
git commit -m "comment here"
git push -u origin master

# Push specific files
git add README.md setup.sh process/*.py process/sql/*.sql server/api/*.js server/api/*.json server/*.sh

# Ignore files/folders
touch .gitignore
# In .gitignore
/folder

```

# Installation
```bash
sudo apt-get install -y git
git config --global user.name "jcousineau"
git config --global user.email "julien.cousineau@gmail.com"
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

