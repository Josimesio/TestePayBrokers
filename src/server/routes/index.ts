import { Router } from 'express';
import { StatusCodes} from 'http-status-codes';

import { ProdutoControlers } from './../controllers';

const router = Router();

router.get('/', ( _, res ) =>{
  return res.send('API Funcionando!');
});

router.post(
  '/produto_api_A',
  ProdutoControlers.createBodyValidator, 
  ProdutoControlers.create);


export {router};