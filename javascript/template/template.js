/*global Base,extend,$*/
function Template(options){
  this.properties ={
    _container:'body',
    
  };
  this.properties=extend(this.properties,options);
  Base.call(this,this.properties);
  this.render();
}
Template.prototype = {
  get parentObjectName(){return this.parent},
  get container(){return $(this._container)},
  get component(){return $('.example')},
  render:function(){
    const html=`
      <div class="example">
      </div>
    `.format();
    this.container.append(html);
    this.component.on('mousedown touchstart', function(e) {});
  },
  get data(){ // This is a Promise
    if(!(this._data)){throw Error("Data is not defined");}
    return this._data;
  },
  set data(value){this._data=value;},
  getData:async function(){
    this.data = await this.downloadData();
  },
  downloadData:async function(){return await null;}
};
Object.assign(Template.prototype,Base.prototype);
Template.prototype.constructor = Template;