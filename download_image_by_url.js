var request = require('request');
var fs = require('fs');


function downloadImageByURL(url, fileName) {
  var file = fs.createWriteStream(fileName);
  request(url).pipe(file);
};

module.exports.downloadImageByURL = downloadImageByURL;