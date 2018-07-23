// console.log('Hello')
// url module nodeJS
var url = require('url')

var parseURL = url.parse("http://www.example.com/[CA]profile?name=barr")


console.log(parseURL.protocol);
console.log(parseURL.host);
console.log(parseURL.query)