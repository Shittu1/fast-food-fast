import menu from '../db/menu';


export const menu = (req, res) =>{
	if(!req.body.name) {
    return res.status(400).send({
      success: 'false',
      message: 'name is required'
    });
  } else if(!req.body.price) {
    return res.status(400).send({
      success: 'false',
      message: 'quantity is required'
    });
  }
 // const order = {
 //   id: db.length + 1,
 //   orderStatus: req.body.status,
 //   name: req.body.name,
 //   quantity: req.body.quantity,
 //   price: "10",
 //   date: new Date().toDateString()
 // }
 // db.push(order);
 return res.status(200).send({
   success: 'true',
   message: 'menu added successfully',
   menu: menu
 })
}