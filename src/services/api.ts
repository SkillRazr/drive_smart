import axios from "axios";

const API_URL = "http://localhost:8081";

type Contact = {
  name: string;
  email: string;
  details: string;
};

const quizMockData = [
  {
    question: "What should you do when you see a red traffic light?",
    options: ["Stop", "Slow down", "Speed up", "Continue if no one is around"],
    correct_answer: "Stop",
  },
  {
    question:
      "What is the legal blood alcohol concentration (BAC) limit for drivers?",
    options: ["0.05%", "0.08%", "0.10%", "0.12%"],
    correct_answer: "0.08%",
  },
  {
    question: "When should you use your turn signals?",
    options: [
      "Only when changing lanes",
      "Only when turning",
      "Both when changing lanes and turning",
      "Never",
    ],
    correct_answer: "Both when changing lanes and turning",
  },
];
const videoMockData = [
  {
    title: "Understanding Traffic Signals",
    url: "https://www.youtube.com/embed/7TESgUA-JW4",
  },
  {
    title: "Safe Driving Practices",
    url: "https://www.youtube.com/embed/abc456",
  },
  {
    title: "The Dangers of Distracted Driving",
    url: "https://www.youtube.com/embed/def789",
  },
];

export const getQuizQuestions = async () => {
  try {
    const response = await axios.get(`${API_URL}/quiz/getQuizzes`);
    console.log("resp", response);
    return response.data.data;
  } catch (e) {
    return { data: [], error: "Api failure, please try again later" };
  }
};

export const getVideos = async () => {
  try {
    const response = await axios.get(`${API_URL}/video/getVideos`);
    return response.data.data;
  } catch (e) {
    return videoMockData;
  }
};

export const saveContacts = async (payload: Contact) => {
  try {
    const response = await axios.post(`${API_URL}/saveContact`, payload);
    return response.data.data;
  } catch (e) {
    return videoMockData;
  }
};
