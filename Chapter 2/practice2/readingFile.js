var fs = require("fs")
var options = { encoding: "utf-8"};

var readingFile = fs.readFile("myFile.txt",options,function(err,data){
    if(err){
        console.error("Error")
        return;
    }


    console.log(data.match(/x/gi).length +"letter X's")
})

module.exports= readingFile