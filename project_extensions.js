require('dotenv').config();
var getContributors = require('./get_repo_contributors');
var downloadImageByURL = require('./download_image_by_url')

var repoOwner = process.argv[2];
var repoName = process.argv[3];

var fs = require('fs');
var request = require('request');

var username = process.env.DB_USER;
var password = process.env.DB_PASS;

function downloadImageByURL(url, fileName) {
  var file = fs.createWriteStream(fileName);
  request(url).pipe(file);
};

 getContributors( repoOwner, repoName, function (err, result) {
  result.forEach( function(contributor) {
    downloadImageByURL(contributor.avatar_url, "./avatars/" + contributor.login + ".jpg")
  })
});