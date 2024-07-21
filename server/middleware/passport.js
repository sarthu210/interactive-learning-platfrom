import User from "../models/user.js"
import passport from "passport";
import LocalStrategy from "passport-local";
import bcrypt from "bcrypt";

passport.use(new LocalStrategy(async function(username, password, done) {
  try {
      const user = await User.findOne({ email: username });
      if (!user) {
          return done(null, false, { message: 'Incorrect Email' });
      }
      if (!bcrypt.compareSync(password, user.password)) {
          return done(null, false, { message: 'Incorrect Password' });
      }
      return done(null, user);
  } catch (err) {
      return done(err);
  }
}));


passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
      const user = await User.findById(id);
      done(null, user);
  } catch (err) {
      done(err);
  }
});
