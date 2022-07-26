const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  `Hello there this is my case ${first},${second}`,
  { flag: "a" }
);
console.log("done task");
console.log("starting the next one");
