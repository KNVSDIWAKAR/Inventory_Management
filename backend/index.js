const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const UserModel = require("./models/Users");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 4000;

dotenv.config();

app.use(
  cors({
    origin: "https://frontendiq.vercel.app", // Frontend URL
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
    credentials: true, // Allow cookies to be sent with the request
    allowedHeaders: ["Content-Type", "Authorization"], // Allow Authorization headers
  })
);

app.use(express.json());
app.use(cookieParser());

// MongoDB connection
mongoose.connect(
  "mongodb+srv://divvukancherla630:1234@cluster0.epdcw.mongodb.net/Inventory"
);

app.get("/", (req, res) => {
  res.send("API is Running...");
});

// User registration endpoint
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      UserModel.create({ name, email, password: hash })
        .then((user) => res.json("success"))
        .catch((err) => res.json(err));
    })
    .catch((err) => res.json(err));
});

// Login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          const token = jwt.sign(
            { email: user.email, role: user.role },
            "jwt-secret-key",
            { expiresIn: "1d" }
          );
          res.cookie("token", token);
          return res.json({ Status: "Success", role: user.role });
        } else {
          return res.json("password is incorrect");
        }
      });
    } else {
      return res.json("No record found");
    }
  });
});

// MongoDB connection
const uri =
  "mongodb+srv://divvukancherla630:1234@cluster0.epdcw.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const store = client.db("Inventory").collection("gadgets");

    // CREATE (UPLOAD PRODUCTS)
    app.post("/upload-product", async (req, res) => {
      const data = req.body;
      const result = await store.insertOne(data);
      res.send(result);
    });

    // READ (VIEW PRODUCTS)
    app.get("/view-product", async (req, res) => {
      const gadgets = await store.find().toArray();
      res.json(gadgets);
    });

    // UPDATE (UPDATE PRODUCTS)
    app.patch("/update-product/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const updateProductData = req.body;
        const filter = { _id: new ObjectId(id) };
        const updateDoc = {
          $set: { ...updateProductData },
        };
        const options = { upsert: true };
        const result = await store.updateOne(filter, updateDoc, options);
        res.json({ status: "Product updated successfully." });
      } catch (error) {
        console.error("Error in update-product route:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // DELETE (DELETE PRODUCTS)
    app.delete("/delete-product/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await store.deleteOne(filter);
      res.send(result);
    });

    console.log("Successfully connected to MongoDB!");
  } finally {
    // await client.close(); // Uncomment if you want to close the connection after the function completes.
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
