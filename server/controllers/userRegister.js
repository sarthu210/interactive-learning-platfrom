import User from "../models/user.js";
import bcrypt from 'bcrypt';
import session from "express-session";

const saltRounds = 11;

async function userRegister(req, res, next) {
    const password = req.body.password;

    try {
        // Hash the password
        const hash = await bcrypt.hash(password, saltRounds);

        // Create a new user with the hashed password
        const user = await User.create({
            ...req.body,
            password: hash
        });

        // Log in the user
        req.login(user, (err) => {
            if (err) {
                console.error('Error logging in:', err);
                return next(err);
            }
            return res.status(201).json(user);
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export default userRegister;