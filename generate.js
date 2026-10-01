// Vercel serverless route: POST /api/generate
const { handleGenerate } = require("../lib/core");
module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Use POST" });
  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
  const [status, data] = await handleGenerate(body, req.headers);
  res.status(status).json(data);
};
