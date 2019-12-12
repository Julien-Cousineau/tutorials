# Object-Oriented Code
```Javascript
function Object(){
    
}
Object.prototype={
  event:function(){
    
  },
  get name(){
    if(!(this._name))
      this._name="defaultname";
    return this._name;
        
  },
  set name(value){this._name=value;},
}
```
# environment variabbles
```
npm install dotenv --save
```
# Azure
```
npm install azure-storage
```
# Azure Installation
```Javascript
var azure = require('azure-storage');
var fs = require('fs');
var blobSvc = azure.createBlobService();

blobSvc.createContainerIfNotExists('mycontainer', function(error, result, response){
    if(!error){
      // Container exists and is private
    }
});

blobSvc.getBlobToStream('mycontainer', 'myblob', fs.createWriteStream('output.txt'), function(error, result, response){
  if(!error){
    // blob retrieved
  }
});
```

