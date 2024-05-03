import express from 'express';
const router = express.Router();
import getEnrolls from '../controllers/getEnrolls.js';

// Get courses a user is enrolled in
router.get('/user-courses', getEnrolls);

export default router;
