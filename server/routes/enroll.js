import express from 'express';
const router = express.Router();
import enrollCours from '../controllers/enrollCourse.js';

// Create a new user
router.post('/enroll', enrollCours);

export default router;
