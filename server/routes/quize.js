import express from 'express';
const router = express.Router();
import QuzieGenerator from '../controllers/quizeGenerator.js';

router.post('/generate-quize', QuzieGenerator);

export default router;
