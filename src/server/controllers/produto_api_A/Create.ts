import { Request, RequestHandler, RequestParamHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup  from 'yup';


interface IProduto {
  id: number;
  Nome: string;
  Descricao: string;
  Valor:number; 

}
const bodyValidation : yup.ObjectSchema<IProduto> = yup.object().shape({
  id: yup.number().required().positive().integer(),
  Nome: yup.string().required(),
  Descricao: yup.string().required(),
  Valor:yup.number().required()    
});


export const createBodyValidator: RequestHandler = async (req, res, next) => {
  try {
    await bodyValidation.validate(req.body, { abortEarly: false });
    return next();
  } catch (err) {
    const yupError = err as yup.ValidationError;
    const errors: Record<string, string> = {};

    yupError.inner.forEach(error => {
      if (error.path === undefined) return;
      errors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({ errors });
  }
};
  
export const create = async (req: Request<{},{},IProduto>,res: Response) => {
  console.log(req.body);

  return res.send('Create!');
};





