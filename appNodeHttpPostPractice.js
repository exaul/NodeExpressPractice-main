const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.method === "POST") {
    console.log("Llegó xD");

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      let userName = body.split("=")[1];

      res.end(`<h1>${userName}</h1>`);
    });
  } else {
    console.log("Llegó el get");

    /*literal templates = alt+96*/
    res.end(`<form method="POST">
                    <input type="text" name="username"></input>
                    <br><br>
                    <button type="submit">Crear Usuario</button>
                </form>`);
  }
});

server.listen(3005);
