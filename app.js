import express from 'express';
import bodyParser from 'body-parser';
import babelRegister from 'babel-register';
import orders from './routes/orders';
import auth from './routes/users';
// import menu from './routes/menu';

const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.get('/', (req, res) => {
	return res.status(200).send({'Message':'Welcome to Fast food fast home page'});
});

// Orders
app.use('/api/v1/orders', orders);
// Users
app.use('/auth', auth);
// Menu
// app.use('/menu', menu);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});


export default app;