os = require('os')

var cpus = os.cpus();

function getcpus(){
  for(var i = 0; i < cpus.length; i ++){
    var cpu = cpus[i];
    for(var key in cpu)
     console.log(JSON.stringify(cpu[key]));
  }
}

console.log(os.type());

//console.log(JSON.stringify(cpus));
//getcpus();



console.log(os.totalmem()/(Math.pow(2,20)));

console.log(os.freemem()/(Math.pow(2,20)));

console.log(process.versions);
//var test = [];
//var size = 100*1024*1024;
//
//for(var i = 0 ; i < 1000000000; i++){
//    test[i] = i + 1;
//    if(i%1000000 == 0){
//      console.log(i);
//      console.log(process.memoryUsage());
//    }
//}

//for(var i = 0 ; i < 20; i++){
//  var buffer = new Buffer(size);
//  for(var j = 0; j < size; j++)
//    buffer[j] = 0;
//  test.push(buffer);
//    console.log(i);
//    console.log(process.memoryUsage());
//  
//}
//console.log(process.memoryUsage());