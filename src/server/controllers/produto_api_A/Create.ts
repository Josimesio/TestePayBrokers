import { Request, Response } from 'express';
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

export const create = async (req: Request<{},{},IProduto>,res: Response) => {
  let validateData: IProduto | undefined = undefined;
  try{
    validateData = await bodyValidation.validate(req.body,{abortEarly:false});
  }catch (err){
    const yupError = err as yup.ValidationError;
    const Errors: Record<string, string> = {

    }; 

    yupError.inner.forEach(error => {
      if(!error.path) return;
      
      Errors[error.path] = error.message;
    });
    
    return res.status(StatusCodes.BAD_REQUEST).json({ Errors});
  }

  console.log(req.body.id); 
  
  return res.send('Create!');
};





