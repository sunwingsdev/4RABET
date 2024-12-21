const express = require("express");

const usersApi = (usersCollection) => {
  const router = express.Router();

  // POST API to save user data after Firebase registration
  router.post("/", async (req, res) => {
    const user = req.body;
    const existingUser = await usersCollection.findOne({ email: user?.email });
    if (existingUser) {
      return res.send("user already exists");
    }
    user.createdAt = new Date();
    const result = await usersCollection.insertOne(user);
    res.send(result);
  });

  router.get("/:email", async (req, res) => {
    const { email } = req.params;
    const result = await usersCollection.findOne({ email });
    res.send(result);
  });

  router.get("/", async (req, res) => {
    const result = await usersCollection.find().toArray();
    res.send(result);
  });
  return router;
};
module.exports = usersApi;
