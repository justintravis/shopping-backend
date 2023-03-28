import express, { Express, Router, Request, Response } from 'express';

const cors = require('cors');

const bodyParser = require('body-parser');

const products = require('./routes/products');
const coupons = require('./routes/coupons');

const app: Express = express();
const homeRouter: Router = Router();
const port = 3000;

homeRouter.get('/', (req: Request, res: Response) => {
  res.send('ok');
});

app.use(cors());
app.use(bodyParser.json());
app.use('/', homeRouter);
app.use('/products', products);
app.use('/coupons', coupons);

app.listen(port, () => {
  console.log(`App listening on port ${ port }`);
});