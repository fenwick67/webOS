// fetch file index

//for now:

var fs = require('fs');

module.exports = function(cb){
  fs.readFile('manifests/index.txt','utf8',function(er,data){
    if (er){return cb(er)}
    var d = data.replace(/[\r\s]/g,'').split('\n').filter(function(line){
      return line && line.indexOf('#') != 0;//remove comments and empty lines
    });
    cb(null,d);
  });
}
