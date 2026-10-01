// Railway (or any Node host): serves the website and the API with zero dependencies.
const http = require("http"), fs = require("fs"), path = require("path");
const { handleGenerate, quota } = require("./lib/core");
const PUB = path.join(__dirname, "public");
const TYPES = { ".html": "text/html; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".txt": "text/plain" };

const send = (res, status, data) => { res.writeHead(status, { "Content-Type": "application/json" }); res.end(JSON.stringify(data)); };

http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://x");
    if (url.pathname === "/api/quota" && req.method === "GET") return send(res, 200, await quota(req.headers));
    if (url.pathname === "/api/generate" && req.method === "POST") {
      let raw = ""; for await (const c of req) { raw += c; if (raw.length > 20000) return send(res, 413, { error: "Too long" }); }
      let body = {}; try { body = JSON.parse(raw || "{}"); } catch (e) { return send(res, 400, { error: "Bad request" }); }
      const [status, data] = await handleGenerate(body, req.headers);
      return send(res, status, data);
    }
    let file = path.normalize(path.join(PUB, url.pathname === "/" ? "index.html" : url.pathname));
    if (!file.startsWith(PUB) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(PUB, "index.html");
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  } catch (e) { console.error(e); send(res, 500, { error: "Server error" }); }
}).listen(process.env.PORT || 3000, () => console.log("TweetGen running on port " + (process.env.PORT || 3000)));
