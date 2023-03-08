import { Router } from 'express';
import { StatusCodes} from 'http-status-codes';

const router = Router();

router.get('/', (_, res)=>{

  return res.send('Teste get');
});

router.get('/teste', (_, res)=>{

  return res.send('Teste get 2');
});

router.post('/teste', (req, res)=>{
  console.log(req.body);
  return res.json(req.body);
});
router.get('/', (_, res)=>{

  return res.send('teste post');
});

router.post('/teste', (req, res)=>{
  console.log(req);
  return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});




export {router};