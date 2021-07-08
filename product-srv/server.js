const express = require("express");
const { readdirSync } = require("fs");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { erroHandler } = require("./middlewares/errorhandling");
const UserCreatedListener = require("./events/productListener");
//Load Config
dotenv.config({ path: "./config/config.env" });

new UserCreatedListener("user:created", "user-srv").listen();
//db connecnt
connectDB();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));
app.use(erroHandler);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Product Server Listening on port ${PORT}`);
});