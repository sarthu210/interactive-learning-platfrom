import express from 'express';
const router = express.Router();
import UserLogout from '../controllers/userLogout.js';

// Create a new user
router.post('/logout', UserLogout);

export default router;
