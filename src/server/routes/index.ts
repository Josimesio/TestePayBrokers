import { Router } from 'express';
import { ProdutoControlers } from './../controllers';

const router = Router();

router.get('/', (_, res) => {
  return res.send('Olá, DEV!');
});

router.get('/produto_api_A', ProdutoControlers.getAllValidation, ProdutoControlers.getAll);
router.post('/produto_api_A', ProdutoControlers.createValidation, ProdutoControlers.create);
router.get('/produto_api_A/:id', ProdutoControlers.getByIdValidation, ProdutoControlers.getById);
router.put('/produto_api_A/:id', ProdutoControlers.updateByIdValidation, ProdutoControlers.updateById);
router.delete('/produto_api_A/:id', ProdutoControlers.deleteByIdValidation, ProdutoControlers.deleteById);

export { router };

