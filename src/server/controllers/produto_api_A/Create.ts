import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../shared/middleware/validation';

interface IProduto {
  Nome: string;
  Descricao: string;
  Valor:number; 
}
export const createValidation = validation((getSchema) => ({
  body: getSchema<IProduto>(yup.object().shape({
    Nome: yup.string().required(),
    Descricao: yup.string().required(),
    Valor:yup.number().required(), 
  })),
}));
export const create = async (req: Request<{}, {}, IProduto>, res: Response) => {
  console.log(req.body);

  return res.status(StatusCodes.CREATED).json(1);
};