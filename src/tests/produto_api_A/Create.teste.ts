import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Pro - Create', () => {


  it('Cria registro', async () => {

    const res1 = await testServer
      .post('/produto_api_A')
      .send({ 
        Nome:'Café',
        Descricao: '500Gr',
        Valor: 14.99 });


    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });
  it('Tenta criar um registro com nome muito curto', async () => {

    const res1 = await testServer
      .post('/produto_api_A')
      .send({ 
        Nome:'Ca',
        Descricao: '500Gr',
        Valor: 14.99 });


    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nome');
  });
});