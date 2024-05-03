import express from 'express';
const router = express.Router();
import levelSubmit from '../controllers/levelSubmit.js';

// Create a new user
router.post('/submit', levelSubmit);

export default router;
