import {Router} from 'express';
import { postMenu, getMenu } from '../controllers/menucontrollers';
const router = Router();


router.post('/menu', postMenu);
router.get('/menu', getMenu);


export default router;