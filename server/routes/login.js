import express from 'express';
const router = express.Router();
import passport from 'passport';
// Create a new user
router.post("/login", passport.authenticate("local"), (req, res) => {
    // This callback will only be executed if authentication succeeds
    // The user object is available in req.user
    const user = req.user;
    // Remove sensitive data
    delete user.password;
    res.status(200).json({
    message: "Successfully logged in"
     });
});

export default router;

