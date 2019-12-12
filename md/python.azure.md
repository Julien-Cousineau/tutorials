# Azure Installation
```
sudo apt-get install -y build-essential libssl-dev libffi-dev python-dev
wget https://bootstrap.pypa.io/get-pip.py
sudo python get-pip.py
sudo pip install futures
sudo pip install --upgrade six
sudo pip install azure-storage
```
# Azure
```Python
from azure.storage.blob import BlockBlobService,ContentSettings
container = 'ecmeit'
block_blob_service = BlockBlobService(account_name='', account_key='')

def azure2ZIP(name,filePath):
    print('Azure to Zip...')
    block_blob_service.get_blob_to_path(container, name, filePath)

def ZIP2Azure(self,name, ZIPPath):
        print('Transfering to Azure...')
        block_blob_service.create_container(container)
        block_blob_service.create_blob_from_path(
            container,
            name,
            ZIPPath,
            content_settings=ContentSettings(content_type='application/zip'))

def azurelist():
  list = block_blob_service.list_blobs('mycontainer')
  for item in list:
    print(item.name)
```

```Python
from azure.storage.blob import BlockBlobService,ContentSettings
container = 'ecmeit'
block_blob_service = BlockBlobService(account_name='', account_key='')

def azure2ZIP(name,filePath):
    print('Azure to Zip...')
    block_blob_service.get_blob_to_path(container, name, filePath)

def ZIP2Azure(self,name, ZIPPath):
        print('Transfering to Azure...')
        block_blob_service.create_container(container)
        block_blob_service.create_blob_from_path(
            container,
            name,
            ZIPPath,
            content_settings=ContentSettings(content_type='application/zip'))

def azurelist():
  list = block_blob_service.list_blobs(container)
  for item in list:
    print(item.name)
    
if __name__ == "__main__":
    # azurelist()
    files = [{'name':'nov30_grid','file':"nov30_grid.zip"},
            {'name':'nov30_processed','file':"nov30_processed.zip"},
            {'name':'nov30_server','file':"nov30_server.zip"}
    ]
    for file in files:
        azure2ZIP(file['name'],file['file'])
```    