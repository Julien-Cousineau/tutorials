# Azure and Cloud9
Check https://docs.c9.io/docs/running-your-own-ssh-workspace
```bash
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y build-essential nodejs 
wget -O - https://raw.githubusercontent.com/c9/install/master/install.sh | bash
cd ~/.ssh
echo "copy/paste key from cloud9]"  >> authorized_keys
cd ..
chmod go-w ~/
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys

```
# Azure Attach Drive
https://docs.microsoft.com/en-us/azure/virtual-machines/linux/classic/attach-disk

sudo chmod -R 0777 ./datadrive/