import { Router } from 'express';

import Chance from 'chance';
const chance = new Chance;


const initialOrder = () => {return {
  someId: chance.integer({min: 100, max: 200}),
  randString: chance.string({length: 3, pool: 'ABCDEFG'}),
  fruit: chance.pickone(['Apple', 'Pear', 'Banana', 'Orange', 'Grapes']),
}};

const router = new Router();

router.get(
  '/api/fruit',
  async(req, res) => {
    return res.json(initialOrder());
  }
);

export default router;