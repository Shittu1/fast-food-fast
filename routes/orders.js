import express from 'express';
import { allOrders, getOrderById, placeAnOrder, updateOrderStatus } from '../controllers/orders';

const router = express.Router();

router.get('/', allOrders);
router.get('/:id', getOrderById);
router.post('/', placeAnOrder);
router.put('/:id', updateOrderStatus);

export default router;