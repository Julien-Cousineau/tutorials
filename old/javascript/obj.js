function obj(paren,options){
    this._parent = parent;
    this.options = extend(Object.create(this.options), options);
}
obj.prototype = {
  options:{
    
  },
  get parent(){if(!(this._parent))throw Error("Parent is undefined");return this._parent();},
    
};


function extend(dest, src) {
    for (var i in src) dest[i] = src[i];
    return dest;
}