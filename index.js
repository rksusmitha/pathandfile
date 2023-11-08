const path = require("path");
// const joinMethod = path.join("work", "from", "home");
// console.log(joinMethod);

// const baseNameMethod = path.basename(
//   "/Users/susmitha/Desktop/filesystem/index.js"
// );

// console.log("baseName ", baseNameMethod);

// const dirnameMethod = path.dirname(
//   "baseNameMethod ",
//   "/Users/susmitha/Desktop/filesystem/index.js"
// );
// console.log("dirnameMethod ", dirnameMethod);

// const pathnameMethod = path.extname(
//   "/Users/susmitha/Desktop/filesystem/index.js"
// );
// console.log("pathnameMethod ", pathnameMethod);

// const parseMethod = path.parse("/Users/susmitha/Desktop/filesystem/index.js");
// console.log("parseMethod ", parseMethod);

console.log("cwd ", __dirname);
//const resolveMethod1 = path.resolve(__dirname, "/a", "b");
// const resolveMethod2 = path.resolve("susmith", "/desktop");
// const resolveMethod3 = path.resolve("a", "/b", "c");
// const resolveMethod4 = path.resolve("./susmitha");
//console.log("resolveMethod1 ", resolveMethod1);
// console.log("resolveMethod2 ", resolveMethod2);
// console.log("resolveMethod3 ", resolveMethod3);
// console.log("resolveMethod4 ", resolveMethod4);

const relativeMethod = path.relative("index.js", "learnfile.js");
console.log("relativeMethod ", relativeMethod);
const resolveMethod2 = path.relative("index.js", "index.js");
console.log("relativeMethod2 ", resolveMethod2);
console.log(path.resolve("./learnfile.js"));
