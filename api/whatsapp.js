export default function handler(req, res) {
  if (req.method === "GET") {
    if (req.query["hub.mode"] === "subscribe" && req.query["hub.verify_token"] === "thrivecv2024") {
      return res.status(200).send(req.query["hub.challenge"]);
    }
    return res.status(403).send("Forbidden");
  }
  if (req.method === "POST") {
    return res.status(200).send("EVENT_RECEIVED");
  }
  return res.status(200).send("ThriveCV Bot is WORKING");
}
