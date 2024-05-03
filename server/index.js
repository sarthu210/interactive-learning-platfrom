import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import axios from "axios";
import register from "./routes/register.js";
import login from "./routes/login.js";
import logout from "./routes/logout.js";
import user from "./routes/getUser.js";
import enroll from "./routes/enroll.js";
import getEnrollInfo from "./routes/getEnrollInfo.js"
import levelSubmit from "./routes/levelSubmit.js";
import getLevels from "./routes/getLevels.js"
import "./database/connection.js";
import "./middleware/passport.js";


const app = express();
const port = 3000;

// CORS configuration
app.use(cors({
  origin: "http://localhost:5173",
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

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', register);
app.use('/auth', login);
app.use('/auth', logout);
app.use('/auth', user);
app.use('/course', enroll);
app.use('/course', getEnrollInfo);
app.use('/level', levelSubmit);
app.use('/level', getLevels);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
