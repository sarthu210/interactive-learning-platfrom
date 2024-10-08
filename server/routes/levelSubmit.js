import express from 'express';
const router = express.Router();
import levelSubmit from '../controllers/levelSubmit.js';
import quizeSubmit from '../controllers/quizeSubmit.js';

// Create a new user
router.post('/submit', levelSubmit);
router.post('/quiz', quizeSubmit);

export default router;
