const codes = require('../constants/coupons.json');

interface Code {
  "code": string;
  "type": string;
  "value": number;
  "minOrder": number;
  "validProducts": number[]
}

export const isCouponValid = (
  { code, orderAmount, products }: {
      code: string,
      orderAmount: number,
      products: number[]
  }) =>
{
  const foundCode: Code = codes.find((c: Code) => c.code === code);
  if (!foundCode) throw new Error(`Coupon ${ code } doesn't exist.`);

  const { validProducts, minOrder } = foundCode;

  const validForProducts = validProducts.some((product: number) => {
    return products.includes(product);
  });

  if (!validForProducts) {
    return false;
  }

  const validForOrderAmount = orderAmount >= minOrder;

  return validForOrderAmount;
}