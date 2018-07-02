// cat project 

var fs = require('fs');
var colors = require('colors');

/*fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\n A tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});
*/

fs.readdir('/kodilla/cat', 'utf-8', function(err, files){
    
        if (err) throw err;
        
        fs.writeFile('./new.txt', files, 'utf-8', function(err){
            fs.readFile('./new.txt', 'utf-8', function(err, data) {
                console.log(data);
            });
        });
   
});