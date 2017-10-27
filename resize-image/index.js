var Jimp = require("jimp");

module.exports = function(context, inputBlob) {
    Jimp.read(inputBlob, function(err, image) {
        image.scale(0.5);
        image.getBuffer(Jimp.AUTO, function(error, imageData) {
            context.log('Node.JS blob trigger function resized ' + context.bindingData.name + ' to ' + image.bitmap.width + 'x' + image.bitmap.height);
            context.bindings.outputBlob = imageData;
            context.done();
        });
    });
}