const fs = require("fs");

// const write = fs.writeFile(
//   "/Users/susmitha/Desktop/filesystem.txt",
//   "Hello World",
//   (err) => {
//     // In case of a error throw err.
//     if (err) throw err;
//   }
// );

// const read = fs.readFile(
//   "/Users/susmitha/Desktop/filesystem.txt",
//   (err, data) => {
//     if (err) {
//       console.log("error ", err);
//     } else {
//       console.log(data.toString());
//     }
//   }
// );

// const write = fs.appendFile(
//   "/Users/susmitha/Desktop/filesystem.txt",
//   "This is the second line",
//   (err) => {
//     // In case of a error throw err.
//     if (err) throw err;
//   }
// );

// const delet = fs.unlink("/Users/susmitha/Desktop/filesystem.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

fs.appendFile("myfile.txt", "Hello World", (err) => {
  if (err) {
    console.log(err);
  }
  {
    console.log("file edit");
  }
});
