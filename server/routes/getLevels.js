import express from 'express';
const router = express.Router();
import getLevels from '../controllers/getLevels.js';

// Create a new user
router.get('/:levelId', getLevels);

export default router;
