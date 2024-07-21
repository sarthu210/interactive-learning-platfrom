import express from 'express';
const router = express.Router();
import userRegister from '../controllers/userRegister.js';

// Create a new user
router.post('/register', userRegister);

export default router;
