import express from 'express'
import { addCategory } from '../controlers/categoryController.js';

const router = express.Router();

router.post('/add', addCategory);

export default router;