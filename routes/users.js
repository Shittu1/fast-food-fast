import {Router} from 'express';
import { signup, me, login } from '../controllers/authcontrollers';
import tokenVerification from '../middlewares/tokenverification';

const router = Router();


router.post('/signup', signup);
router.get('/me', tokenVerification, me);
router.post('/login', login); 


export default router;