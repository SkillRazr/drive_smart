import express from "express";
import { quizzes } from "../data/quiz_data";
const router = express();

// connnect to db logic

router.get("/getQuizzes", (req: any, res: any) => {
  // connect to mongodb to get all the quizzes and return

  return res.status(200).json({
    status: 1,
    data: quizzes,
  });
});

router.post("/createQuizzes", (req: any, res: any) => {
  // database connection logic and save a new quiz
  return res.status(200).json({
    status: 1,
    data: quizzes,
  });
});

export default router;
