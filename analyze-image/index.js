var NEEDLE = require('needle');

module.exports = function(context, inputBlob) {

  var options = {
      "Ocp-Apim-Subscription-Key" : "8b03b56769db430c832bcbd33f07c062"
  };

  var data = {
    payload : {
      value: inputBlob,
      content_type: 'application/octet-stream'
    }
  };

  NEEDLE.('post','https://southcentralus.api.cognitive.microsoft.com/vision/v1.0/describe',
    data, options)
    .then(response => {
        console.log(response.Result);
    })
    .catch(err => {
        console.log(err);
    });

}
