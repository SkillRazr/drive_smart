import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { MongoClient } from "mongodb";
import "dotenv/config";

const router = express.Router();

const uri = process.env.MONGODB_URI;
const dbName = "skillrazr";
const collectionName = "users";

let db: any;

console.log("mongod url", uri);
MongoClient.connect(uri!)
  .then((client: any) => {
    db = client.db(dbName);
    console.log("Connected to MongoDB");
  })
  .catch((error: string) => console.error(error));

router.post("/signup", async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { email, password: hashedPassword };
    await db.collection(collectionName).insertOne(newUser);
    res.status(201).send("User created");
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const user = await db.collection(collectionName).findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).send("Invalid credentials");
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
