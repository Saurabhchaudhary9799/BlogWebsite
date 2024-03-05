const express = require("express");
const dotenv = require("dotenv");
const connectToMongoDB = require("./connection");
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 202,
};

app.use(cors(corsOptions));
dotenv.config();
//connection
connectToMongoDB(process.env.MONGO_URL);

//middleware

app.use(express.json());
// app.use(notFound);
// app.use(errorHandler);

app.use("/user", userRoutes);
app.use("/", blogRoutes);

app.listen(PORT, () => {
  console.log(`server connected at port : ${PORT}`);
});
