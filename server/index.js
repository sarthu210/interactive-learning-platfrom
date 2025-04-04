import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import env from "dotenv";
import register from "./routes/register.js";
import login from "./routes/login.js";
import logout from "./routes/logout.js";
import user from "./routes/getUser.js";
import enroll from "./routes/enroll.js";
import getEnrollInfo from "./routes/getEnrollInfo.js"
import levelSubmit from "./routes/levelSubmit.js";
import getLevels from "./routes/getLevels.js"
import quize from "./routes/quize.js";
import quizeSubmit from "./routes/quizeSubmit.js"
import "./middleware/passport.js";
import dbConnector from "./database/connection.js";

dbConnector();
const app = express();
const port = 3000;

env.config();
// CORS configuration
const allowedOrigin = "http://localhost:5173";

app.use(cors({
  origin: allowedOrigin,
  methods: 'GET,DELETE,PATCH,POST,PUT',
  allowedHeaders: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  credentials: true
}));

// Bodyparser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Session configuration
app.use(session({
  secret: "IAMSARTHAKNANDE",
  resave: false,
  saveUninitialized: true,
  proxy: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 1,
  }
}));



// Passport configuration
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get("/", (req, res) => {
  console.log(req.session.user);
  res.send(req.session.user);
});

app.use('/auth', register);
app.use('/auth', login);
app.use('/auth', logout);
app.use('/auth', user);
app.use('/course', enroll);
app.use('/course', getEnrollInfo);
app.use('/level', levelSubmit);
app.use('/quize', quizeSubmit);
app.use('/level', getLevels);
app.use('/api', quize);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});