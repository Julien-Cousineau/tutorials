/*global extend */
function Base(properties){
    const self = this;
    const _properties={
      debug:true,
    };
    this.properties=extend(_properties, properties);
    this.pointer = function(){return self};
    this._defineProperties();
}
Base.prototype = {
  _defineProperties:function(){
    Object.keys(this.properties).forEach(key=>{
      Object.defineProperty(this, key,{
           configurable: true,
           get:function() {return (key=='parent')?this.properties[key]():this.properties[key];},
           set:function(value) {this.properties[key]=value;}
           });      
    });  
  },
};