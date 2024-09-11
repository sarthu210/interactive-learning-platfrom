import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";
import env from "dotenv"
import cors from "cors";
import axios from "axios";
import register from "./routes/register.js";
import login from "./routes/login.js";
import logout from "./routes/logout.js";
import user from "./routes/getUser.js";
import enroll from "./routes/enroll.js";
import getEnrollInfo from "./routes/getEnrollInfo.js";
import levelSubmit from "./routes/levelSubmit.js";
import getLevels from "./routes/getLevels.js";
import quize from "./routes/quize.js"
import "./database/connection.js";
import "./middleware/passport.js";


const app = express();
const port = process.env.PORT || 3000;

env.config();

// CORS configuration
const allowedOrigins = ["http://localhost:5173", "https://interactive-learning-platfrom.vercel.app/"];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

// Bodyparser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session configuration
app.use(session({
  secret: "IAMSARTHAKNANDE",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 1,
  }
}));

app.get("/" , (req, res) => {
  res.send("Hello World");
});

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());

// Route handlers
app.use('/auth', register);
app.use('/auth', login);
app.use('/auth', logout);
app.use('/auth', user);
app.use('/course', enroll);
app.use('/course', getEnrollInfo);
app.use('/level', levelSubmit);
app.use('/level', getLevels);
app.use('/api', quize);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
