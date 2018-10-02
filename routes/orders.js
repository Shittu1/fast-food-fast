
import {Router} from 'express';
import { allOrders, getOrderById, placeAnOrder, updateOrderStatus } from '../controllers/orderscontrollers';

const router = Router();

router.get('/', allOrders);
router.get('/:id', getOrderById);
router.post('/', placeAnOrder);
router.put('/:id', updateOrderStatus);

export default router;