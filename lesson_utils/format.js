const util = require('util');

// FORMAT

const str = util.format("My %d %s %j" , "string", 123 , {test:"obj"});

console.log(str);