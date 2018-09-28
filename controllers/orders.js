//Acknowledgements
//https://medium.com/@purposenigeria/build-a-restful-api-with-node-js-and-express-js-d7e59c7a3dfb
//https://groundberry.github.io/development/2016/12/10/testing-express-with-mocha-and-chai.html
import db from '../db/db';

//ALL ORDERS
export const allOrders = (req, res) => {
 res.status(200).send({
    success: 'true',
    message: 'orders retrieved successfully',
    orders: db
  });
}

//FETCH AN ORDER
export const getOrderById = (req, res) => {
      const id = parseInt(req.params.id, 10);
      for(var i = 0; i < db.length; i++){
        var order = db[i];
        if (order.id === id) {
          return res.status(200).send({
            success: 'true',
            message: 'order retrieved successfully',
            order
         });
         break;
        }
      }
    return res.status(404).send({
    success: 'false',
    message: 'order does not exist'
  });
}

//PLACE AN ORDER
export const placeAnOrder = (req, res) =>{
	if(!req.body.name) {
    return res.status(400).send({
      success: 'false',
      message: 'name is required'
    });
  } else if(!req.body.quantity) {
    return res.status(400).send({
      success: 'false',
      message: 'quantity is required'
    });
  }
 const order = {
   id: db.length + 1,
   orderStatus: req.body.status,
   name: req.body.name,
   quantity: req.body.quantity,
   price: "10",
   date: new Date().toDateString()
 }
 db.push(order);
 return res.status(200).send({
   success: 'true',
   message: 'order added successfully',
   order: order
 })
}

//UPDATE ORDER STATUS
export const updateOrderStatus = (req, res) => {
  const id = parseInt(req.params.id, 10);
  let orderFound;
  let itemIndex;
  db.map((order, index) => {
    if (order.id === id) {
      orderFound = order;
      itemIndex = index;
    }
  });

  if (!orderFound) {
    return res.status(404).send({
      success: 'false',
      message: 'order not found'
    });
  }

  if (!req.body.name) {
    return res.status(400).send({
      success: 'false',
      message: 'name is required'
    });
  } else if (!req.body.quantity) {
    return res.status(400).send({
      success: 'false',
      message: 'quantity is required'
    });
  }

  const updatedOrder = {
    id: orderFound.id,
    name: req.body.name || orderFound.name,
    quantity: req.body.quantity || orderFound.quantity
  };

  db.splice(itemIndex, 1, updatedOrder);

  return res.status(200).send({
    success: 'true',
    message: 'order added successfully',
    updatedOrder: updatedOrder
  });
}
