var request = require('request');



function getRepoContributors(repoOwner, repoName, callback) {
  var endpoint = "https://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";

  var options = { // request(options, callback);
    url: endpoint,
    headers: {'User-Agent': 'request'}
  };

  request(options, function(err, request, body) {
      callback(err, JSON.parse(body));
    });
}

module.exports.getRepoContributors = getRepoContributors;