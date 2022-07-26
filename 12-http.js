const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Welcome my homepage");
  if (req.url === "/about") res.end("Shi ba bec ta");
  res.end(`
  <h1>Oppppppppppppp</h1>
  <a href ="/">Back to home page</a>
  `);
});
server.listen(5000);
