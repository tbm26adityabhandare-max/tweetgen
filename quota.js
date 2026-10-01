// Vercel serverless route: GET /api/quota
const { quota } = require("../lib/core");
module.exports = async (req, res) => res.status(200).json(await quota(req.headers));
