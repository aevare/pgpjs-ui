var fs = require('fs');

var config = {
    distPath: 'PGPui/www/',
    files: {
        'node_modules/openpgp/dist/openpgp.js': 'js/openpgp.js',
    }
};

var copyFile = function(oldFile, newFile){
    fs.createReadStream(oldFile).pipe(fs.createWriteStream(newFile));
};

Object.keys(config.files).forEach(function(key){
    var dest = config.files[key];
    copyFile(key, config.distPath + dest);
});

console.log('Files copied');
