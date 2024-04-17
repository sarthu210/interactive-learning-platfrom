import express from 'express';
const router = express.Router();
import getUser from "../controllers/getUser.js";

// Create a new user
router.get('/user', getUser);

export default router;
