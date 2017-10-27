var NEEDLE = require('needle');

/*

http -f post https://southcentralus.api.cognitive.microsoft.com/vision/v1.0/describe Ocp-Apim-Subscription-Key:8b03b56769db430c832bcbd33f07c062 maxCandidates==1 Content-Type:
application/octet-stream < ~/Downloads/DevOps-Pivotal-Office-SF-01\ \(1\).jpg

*/

module.exports = function(context, inputBlob) {

  var options = {
      "Ocp-Apim-Subscription-Key" : "8b03b56769db430c832bcbd33f07c062",
      "Content-Type" : "application/octet-stream"
  };

  context.log("Shipping blob to Cognitive Services:");
  NEEDLE.post('https://southcentralus.api.cognitive.microsoft.com/vision/v1.0/describe?maxCandidates=1',
    inputBlob, options, function(err, response) {
        if (err) {
          context.log("Error calling Cognitive Services:");
          context.log(err);
        } else {
          context.log("Successful call to Cognitive Services");
          context.log(response);
        }
        context.done();
    });


}
