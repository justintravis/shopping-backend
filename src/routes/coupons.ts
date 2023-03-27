import { Router, Request, Response, response } from 'express';
import { isCouponValid } from '../utils/coupons';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('coupon root');
});

router.post('/checkValidity', (req: Request, res: Response) => {
  const { code, orderAmount, products } = req.body;
  try {
    const valid = isCouponValid({ code, orderAmount, products });
    res.send(valid);
  } catch(err) {
    res.status(500);
    res.json({"error": err});
  }
});

module.exports = router;