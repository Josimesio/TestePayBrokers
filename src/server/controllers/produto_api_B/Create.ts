import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../shared/middleware/validation';

interface IProdutoB {
  Nome: string;
  Descricao: string;
}
export const createValidation = validation((getSchema) => ({
  body: getSchema<IProdutoB>(yup.object().shape({
    Nome: yup.string().required(),
    Descricao: yup.string().required(), 
  })),
}));
export const create = async (req: Request<{}, {}, IProdutoB>, res: Response) => {
  console.log(req.body);

  return res.status(StatusCodes.CREATED).json(1);
};