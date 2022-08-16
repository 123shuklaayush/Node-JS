const fs = require('fs');
fs.readFile('index.js', 'utf-8', (err, data)=>{
console.log(err, data)
})
console.log("Finished Reading File")
//Here notice that the Finished Reading File is getting executed first because readfile is taking time. To do is in correct order refer to cwh 45min