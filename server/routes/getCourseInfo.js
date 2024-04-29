import express from 'express';
const router = express.Router();
import getCourse from "../controllers/getCourse.js";

// Get courses a user is enrolled in
router.get('/user-courses', getCourse);

export default router;
