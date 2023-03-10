import { Router } from 'express';
import { ProdutoController } from './../controllers';

const router = Router();

router.get('/', (_, res) => {
  return res.send('Olá, DEV!');
});

/*router.get('/produto_api_A', ProdutoController.getAllValidation, ProdutoController.getAll);*/
router.post('/produto_api_A', ProdutoController.createValidation, ProdutoController.create);

export { router };

