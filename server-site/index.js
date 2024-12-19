const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;

const corsConfig = {
  origin: "http://localhost:5173",
  credential: true,
  optionSuccessStatus: 200,
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
};

//middlewares
app.use(cors(corsConfig));
app.options("", cors(corsConfig));
app.use(express.json());

// mongodb start

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.u53dl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //collections start
    const usersCollection = client.db("rabet").collection("users");
    //collections end

    // APIs start

    // POST API to save user data after Firebase registration
    app.post("/api/users", async (req, res) => {
      const user = req.body; // Getting the user data from frontend

      try {
        const result = await usersCollection.insertOne(user);
        res.status(201).send({
          success: true,
          message: "User registered successfully",
          data: result,
        });
      } catch (error) {
        console.error("Error inserting user:", error.message);
        res.status(500).send({
          success: false,
          message: "Failed to register user",
          error: error.message,
        });
      }
    });
    // APIs end

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// mongodb end

app.get("/", (req, res) => {
  res.send("4RABET server is running");
});

app.listen(port, () => {
  console.log(`4RABET Server is running on PORT: ${port}`);
});
