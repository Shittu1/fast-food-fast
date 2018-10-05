import {Router} from 'express';
import { signup, me, login } from '../controllers/authcontrollers';
const router = Router();


router.post('/signup', signup);
router.post('/login', login); 


export default router;