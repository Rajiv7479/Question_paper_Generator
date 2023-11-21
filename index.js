import express from "express";
import router from "./routes/questionRoutes.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("welcome to the question page!!!");
});

// https://localhost:3000/questions path will give the question according to the requirements

app.use("/questions", router);

app.listen(3000, () => {
  console.log("listing at localhost:3000");
});
