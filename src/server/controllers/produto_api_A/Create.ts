import { Request, Response } from 'express';
import * as yup from 'yup';

import { validation } from '../../shared/middleware/validation';

interface IProduto {
  id: number;
  Nome: string;
  Descricao: string;
  Valor:number; 
}
interface IFilter {
  filter?: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IProduto>(yup.object().shape({
    id: yup.number().required().positive().integer(),
    Nome: yup.string().required(),
    Descricao: yup.string().required(),
    Valor:yup.number().required(), 
  })),
  query: getSchema<IFilter>(yup.object().shape({
    filter: yup.string().required().min(3),
  })),
}));

export const create = async (req: Request<{}, {}, IProduto>, res: Response) => {
  console.log(req.body);

  return res.send('Create!');
};