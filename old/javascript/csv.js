const path = require('path');
const fs  = require('fs');
const Papa= require('papaparse');

function obj(){
    
}
obj.prototype = {
  readCSV:function(input,outstream,callback){
    const instream = fs.createReadStream(input);
    const stats   = fs.statSync(input);
    const self=this;
    let tcount=0,count=0;
    
    
    
    Papa.parse(instream, {
      header: true,
      // fastMode:true,
	    step: function(row) {
        if(tcount>=50000){
          self.meta.progress=row.meta.cursor / stats.size * 100;
          self.print();
          console.log(count);tcount=0;
          // console.log(row.data[0])
        }
        count++;tcount++;
        
        self.parseCSV(row.data[0],function(obj){
          // if(tcount>=50000){
          //   console.log(obj)
          // }
	      outstream.write(obj);
	      });
	    },
	    error:function(e){callback(true,e);},
        complete: function() {callback(false,data);}
    });
  },
  parseCSV:function(obj,callback){
    this.irow++;
    const ships = this.SHIP.ships;
    for(let engine in ENGINES){
      const ping = {};
      let allzeros = true;
      for(let i=0,n=EMISSIONS.length;i<n;i++){
        const emission = EMISSIONS[i];
        const prop = engine + "_" + emission;
        const pvalue = parseFloat(obj[prop]);
        const value = pvalue ? pvalue : 0;
        if(value>0){allzeros=false;}
        ping[emission]=value;
      }
      if(!(allzeros)){
        const ship_id = obj.ship_id;
        // const ip      = parseFloat(obj.ip);
        const point_id= obj.grid_index;
        const mode    = obj.activity_type;
        const ip = (obj.ip && obj.ip.toLowerCase()==='true')?1:0;
        const datetime= Date.parse(obj.date_time);
        
        if(!(ships[ship_id]))this.errorlog.push("Cannot find ship_id : " + ship_id);
        
        if(!(this.points[point_id])){
          const lng = parseFloat(obj.long) || 0;
          const lat = parseFloat(obj.lat)  || 0;
          
          let meit = parseInt(obj.meit_region);
          meit = (meit >= 0 && meit <= 22)? meit:0;
          
          const mapmeit = this.MEIT.getIndex(lng,lat);
          const prov = this.PROV.getIndex(lng,lat);
          const hex_16  = this.hex[16].getIndex(lng,lat);
          const hex_4   = this.hex[4].getIndex(lng,lat);
          const hex_1   = this.hex[1].getIndex(lng,lat);
          
          this.points[point_id]    = this.ipoint;
          this.lng[this.ipoint]    = lng;
          this.lat[this.ipoint]    = lat;
          this.meit[this.ipoint]   = meit;
          this.mapmeit[this.ipoint]= mapmeit;
          this.prov[this.ipoint]= prov;
          this.hex_16[this.ipoint] = hex_16;
          this.hex_4[this.ipoint]  = hex_4;
          this.hex_1[this.ipoint]  = hex_1;
          
          this.ipoint++;
        }
        
        // ping.ship_id = ships[ship_id].id;
        ping.class   = ships[ship_id].Class;
        ping.type    = ships[ship_id].type;
        ping.ip      = ip;
        // ping.point_id= point_id;
        // ping.mode    = MODES[mode];
        ping.mode    = mode;
        ping.engine  = ENGINES[engine];
        ping.datetime= datetime/1E3;
        ping.lng     = this.lng[this.points[point_id]];
        ping.lat     = this.lat[this.points[point_id]];
        ping.meit    = this.meit[this.points[point_id]];
        ping.mapmeit = this.mapmeit[this.points[point_id]];
        ping.prov    = this.prov[this.points[point_id]];
        ping.hex_16  = this.hex_16[this.points[point_id]];
        ping.hex_4   = this.hex_4[this.points[point_id]];
        ping.hex_1   = this.hex_1[this.points[point_id]];
        
        
        for(let i=0,n=YEARS.length;i<n;i++){
          const year=YEARS[i];
          ping['nox'+year]=ships[ship_id].forecast[year][ping.engine][ping.meit].nox / 4.0 *256.0;
          ping['other'+year]=ships[ship_id].forecast[year][ping.engine][ping.meit].sox / 4.0 *256.0;
        }

        const data=FIELDS.map(f=>ping[f]);
        this.iping++;
        callback(data.join(",") + "\n");
      }
    }
  },    
}

