const https = require("http");
const server = https.createServer((req, res) => {
  if (req.url === "/") {
    res.write("You are in Root Directory");
    res.end();
  } else if (req.url === "/people") {
    res.write("You are in people page");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Listining request on 3000 port");
});
