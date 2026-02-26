import http from "node:http";

const PORT = process.env.PORT || 3000;

export function createApp() {
  const server = http.createServer((req, res) => {
    if (req.url === "/health") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: "ok" }));
      return;
    }

    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Welcome to kumogakure" }));
      return;
    }

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  });

  return server;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const server = createApp();
  server.listen(PORT, () => {
    console.log(`kumogakure server running on http://localhost:${PORT}`);
  });
}
