const testfolder = "../examples/";
const fs = require("fs");

fs.readdir(testfolder, (err, files) => {
  files.forEach((file) => console.log(file));
});
