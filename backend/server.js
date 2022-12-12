const pool = require("./pool");
const controller = require("./controller");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5700;
const rateLimit = require("express-rate-limit")

app.use(express.json());
app.use(cors());

// allowing cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// const connect = () => {
//   try {
//     console.log(`${pool.proConfig} is connected`);
//   } catch (err) {
//     console.error(err.message);
//   }
// };
// connect();

const limiter = rateLimit({
  windowMS: 1 * 60 * 1000,
  max: 1000,
  message: "10 requests per minute, dont be stupid"

})
app.use(limiter)

app.get("/fstodos/", controller.getAllTodos);
app.get("/fstodos/:id", controller.getOneTodo)
app.post("/fstodos/", controller.createTodo)
app.patch("/fstodos/:id", controller.updateTodo)
app.delete("/fstodos/:id", controller.removeTodo)

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
