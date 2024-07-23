import express from "express";
import { videoData } from "../data/video_data";
const router = express();

// connnect to db logic

router.get("/getVideos", (req: any, res: any) => {
  return res.status(200).json({
    status: 1,
    data: videoData,
  });
});

export default router;
