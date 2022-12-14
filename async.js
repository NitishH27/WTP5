const fs = require('fs');

fs.writeFile('input.txt','Hello World','utf-8',(err)=>{
    if (err) throw err;
    console.log('file written')
})
fs.appendFile('input.txt',' Welcome to FY.MCA','utf-8',(err)=>{
    if (err) throw err;
    console.log('file appended')
});
fs.readFile('input.txt','utf-8',(err,data) => {
    if (err) throw err;
    console.log(data);
    
})
fs.rename('input.txt','input.renamed.txt',(err) => {
    if (err) throw err;
    console.log('file renamed')
})
// setTimeout(()=>{
fs.unlink('input.renamed.txt',(err)=>{
    if (err) throw err;
    console.log('path/file.txt was deleted');
})
console.log("all commands queued for asynchronous operations.")
// },2000)