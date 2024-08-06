import expres from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { MongoClient, ServerApiVersion } from "mongodb";

import quizApis from "./routes/quizApiRoutes";
import videoApis from "./routes/videoApiRoute";
import authApis from "./routes/auth";
import { quizzes } from "./data/quiz_data";
import "dotenv/config";

const app = expres();

// middlewares in express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expres.json());
app.use(cors());

// routes middleware
app.use("/quiz", quizApis);
app.use("/video", videoApis);
app.use("/auth", authApis);

console.log("serverr", process.env.MONGODB_URI);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const dbName = "skillrazr";
const collectionName = "questions";

let db: any;

// Connect to MongoDB
// @ts-ignore
MongoClient.connect(process.env.MONGODB_URI!)
  .then((client) => {
    db = client.db(dbName);
    console.log("Connected to MongoDB");

    async function setupQuestions() {
      try {
        for (const quiz of quizzes) {
          await db.collection(collectionName).insertOne(quiz);
        }
        // const student = await students.findOne({ name: "Likith" });
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }
    // setupQuestions().catch(console.dir);
  })
  .catch((error) => console.error(error));

const port = 8081;

app.get("/", (req: any, res: any) => {
  res.send("Welcome to my server");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});
