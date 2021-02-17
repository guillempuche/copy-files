const fs = require('fs');
const path = require('path');

// C:\Users\Monitors\Desktop\Reptes TdR STEAM
// fs.rename('/path/to/Afghanistan.png', '/path/to/AF.png', function(err) {
//     if ( err ) console.log('ERROR: ' + err);
// });

const PATH_FITXES_ORIGINALS = "/fitxes-originals"
const PATH_FITXES_MODIFICADES = "/fitxes-modificades"
var filesNameWithSystemPath = [];

// Function to get current directoriesName 
// in directory 
// const foldersName = fs.readdirSync(path.join(__dirname, `/${PATH_FITXES_ORIGINALS}`));
const foldersName = fs.readdirSync(`./${PATH_FITXES_ORIGINALS}`);

console.log(`Found ${foldersName.length} folders`);

foldersName.forEach(folderName => {
  fs.readdir(`./${path.join(PATH_FITXES_ORIGINALS, folderName)}`,
    (err, files) => {
      if (err) throw err;

      files.forEach((fileName, index) => {
        const fileNameWithPath = path.join(__dirname, PATH_FITXES_ORIGINALS, folderName, `${fileName}`);

        const newFileName = `${folderName.slice(0, 10)}-${index + 1}-${fileName.slice(0, 15) + fileName.slice(-7)}`;
        const destination = path.join(__dirname, PATH_FITXES_MODIFICADES, newFileName)

        console.log(fileNameWithPath);

        fs.copyFile(fileNameWithPath, destination, (err) => {
          if (err) throw err
        });


      })
    });
})