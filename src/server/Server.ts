import express from 'express';

const server = express();


server.get('/', (_, res)=>{

  return res.send('Teste Server Josimesio');
}
);

export {server};
