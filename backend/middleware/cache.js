const redis = require("redis");
const client = redis.createClient();

client.on("error", (err) => {
  console.error("Redis error:", err);
});

const cache = (req, res, next) => {
  const { city } = req.params;

  client.get(city, (err, data) => {
    if (err) throw err;
    if (data !== null) {
      res.send(JSON.parse(data));
    } else {
      next();
    }
  });
};

module.exports = cache;
