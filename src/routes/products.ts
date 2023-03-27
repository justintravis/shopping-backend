import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  const products = require('../constants/store-items.json');
  res.json(products);
});

module.exports = router;