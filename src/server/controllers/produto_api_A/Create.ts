import { Request, Response } from 'express';


interface IProduto {
  id: string;
  Nome : string;
  Descricao: string;
  Valor:string; 


}

export const create = (req: Request<{},{},IProduto>,res: Response) => {
  console.log(req.body); 
  


  return res.send('Create!');
};





