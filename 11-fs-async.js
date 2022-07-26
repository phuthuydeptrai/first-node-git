const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) return;
  console.log(result);
  const first = result;
  readFile("./content/first.txt", "utf-8", (err, result) => {
    if (err) return;
    console.log(result);
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Hello there this is my case ${first},${second}`,
      (err, result) => {
        if (err) return;
        console.log(result);
      }
    );
  });
});
