import express from 'express';
const router = express.Router();
import quizeSubmit from '../controllers/quizeSubmit.js';

// Create a new user
router.post('/quizSubmit', quizeSubmit);

export default router;
