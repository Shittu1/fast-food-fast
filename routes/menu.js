import {Router} from 'express';
import { menu } from '../controllers/menucontrollers';
const router = Router();


router.post('/menu', menu);


export default router;