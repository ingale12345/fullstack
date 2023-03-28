// const os = require("os");
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.platform());

const fs = require("fs");

fs.readdir(__dirname, (err, files) => {
  if (err) console.log(err);
  else console.log(files);
});
