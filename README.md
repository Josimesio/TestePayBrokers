Teste prático – Desenvolvedor back-end
Desenvolver duas APIs com foco na comunicação entre micro-serviços!
Tecnologias sugeridas:
NestJs
TypeScript
MongoDb
Mongoose
RabbitMq
O Objetivo é criar duas APIs que se comunicam entre sı́; 
A API “A” irá possuir as seguintes responsabilidades:
Criar uma collection do mongoDB, denominada Produtos_Api_A
Na API “A” precisamos ter uma rota do tipo POST, que receberá um payload para 
criação de um produto, com as seguintes informaçõ es: 
— id (unique)
— nome
— descrição
— valor 
Todos os campos, menos “descrição” são obrigató rios!
Ao receber os dados, deveremos validar se esse produto já está cadastrado em nossa
collection Produtos_Api_A, caso exista retornar uma mensagem avisando que o 
produto já existe! 
Caso o produto não exista na nossa base, criar o registro desse produto na base da 
API “A”, e apó s a criaçã o, enviar os dados do produto usando comunicação de ϐila
do RabbitMq para a segunda API, e apó s enviar, retornaremos o produto criado no 
retorno da chamada do método POST. 
A API “B” irá possuir as seguintes responsabilidades:
Criar uma collection no mongoDB, denominada Produtos_Api_B 
Essa api deverá receber os dados enviados pela API “A” via RabbitMq, validar se o já
existe na base de dados dela, caso já exista devemos descartar a chamada e caso não
exista deveremos criar ele na nossa base! 
Essa API terá uma rota do tipo GET, onde poderemos listar todos os produtos que
existem na base dela, de forma paginada e podendo passar por parâmetro ϐiltro pelo 
campo nome do produto. 
Diferenciais:
- Garantir que todos os produtos que forem cadastrados na API “A”, estejam na 
também cadastrados na API “B”, mesmo que possa ocorrer alguma falha na API “B”, 
como um shutdown quando a API “A” enviar os dados, de forma que os produtos 
nunca sejam perdidos, “Não obrigató rio” 
- Conϐigurar e utilizar o Ack do RabbitMq, para garantir a entrega dos produtos!
- Utilizar as APIs pelo NestJs, de ϐilas, banco, para realizar as conϐiguraçõ es do 
RabbitMq e do MongoDB 
Se preocupar com a organização do có digo dentro dos mó dulos do NestJs, 
mantendo o mais limpo, simples e claro possıv́ el.
Observações: 
- Pode-se usar uma imagem Docker do RabbitMq, e do MongoDb para realizar o
desenvolvimento e testes, não é necessário ser disponibilizadas as imagens. 
- Conϐigurar o .env de ambas as aplicaçõ es, com as variáveis de conϐiguração do
MongoDB, e do RabbitMq. 
- Criar um Readme.md explicando como executar a aplicação! 
- Ao ϐinalizar, subir o repositó rio em uma conta GIT aberta, e nos enviar a URL de 
acesso