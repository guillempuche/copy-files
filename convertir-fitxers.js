const fs = require('fs');
const path = require('path');

const PATH_FITXES_ORIGINALS = "/fitxes-originals"
const PATH_FITXES_MODIFICADES = "/fitxes-modificades"

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

        fs.copyFile(fileNameWithPath, destination, (err) => {
          if (err) throw err
        });
      })
    });
})