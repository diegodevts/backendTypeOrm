# Projeto vagaBackend


Basicamente o projeto possui dois CRUDS de usuário e de endereço, valida o usuário cadastrado, e dá um token de autenticação ao mesmo, alem de amarrar o endereço ao usuário por meio de um ER many to one.
*******************************************************************************************
Feito em typescript + libs, que são:

- Express para backend
- JWT para gerar token
- typeorm pra criar entidades e salvar usuário e endereço no banco
- bcrypt pra encriptar senhas

******************************************************************************************

Para rodar o projeto basta digitar os comandos:

- npm run typeorm migration:run
- npm run dev

******************************************************************************************

#CRUD USER


- Inserir user

método post + /users

{
  "user": {
    "id": "79cf672e-089d-41d6-95a6-2a6fea1f71d1",
    "nome": "Diana",
    "telefone": "88888",
    "email": "Diana@hotmil",
    "senha": "$2a$08$fB3oy.5BXEYpy/G7lvnO6O0svBNwOvuRsyeEPh1/ezxYOTzD1SOjy",
    "idade": 22,
    "peso": 80,
    "etnia": "parda",
    "created_at": "2021-05-21T05:07:06.336Z",
    "updated_at": "2021-05-21T05:07:06.336Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjE1NzM2MjYsImV4cCI6MTYyMTY2MDAyNn0.WUzT7I98Ow9Qk8jZo2ERhWZgp5HbviZvLXNMZ4cf3lw"
}

>Reparem que o usuário assim que se cadastra já recebe o token e a senha com o hash

****************************************************************************************
- Logar user

método post + /session

{
  "user": {
    "id": "79cf672e-089d-41d6-95a6-2a6fea1f71d1",
    "nome": "Diana",
    "telefone": "88888",
    "email": "Diana@hotmil",
    "senha": "$2a$08$fB3oy.5BXEYpy/G7lvnO6O0svBNwOvuRsyeEPh1/ezxYOTzD1SOjy",
    "idade": 22,
    "peso": 80,
    "etnia": "parda",
    "created_at": "2021-05-21T05:07:06.336Z",
    "updated_at": "2021-05-21T05:07:06.336Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc5Y2Y2NzJlLTA4OWQtNDFkNi05NWE2LTJhNmZlYTFmNzFkMSIsImlhdCI6MTYyMTU4MDUyOSwiZXhwIjoxNjIxNjY2OTI5fQ.wrbZPTCmw6gCURQmCWLim9s6zR-0_LkyP71DH6jigtA"
}

>Sim, quando você loga, um token também é gerado
>existem verificações de email e senha

****************************************************************************************

- Requisitar todos os usuários

método get + /users

[
  {
    "id": "e4734f9d-5461-4d05-811d-b9e246aae9ec",
    "nome": "Diego",
    "telefone": "33394545",
    "email": "diego@hotmail",
    "senha": "$2a$08$REOjiVrt5EE.6OtSuppJQeIF.c5RRy3TcpO8QeJPPhQTWgDDdI5gi",
    "idade": 22,
    "peso": 80,
    "etnia": "parda",
    "created_at": "2021-05-21T02:35:37.744Z",
    "updated_at": "2021-05-21T02:35:37.744Z"
  },
  {
    "id": "5e5a567f-686c-4c75-80e0-4e80c0b68a31",
    "nome": "gabriel",
    "telefone": "88888888",
    "email": "gabriel@hotmail",
    "senha": "$2a$08$ZabdsQeKJ1SAD1vZceCUWeS.C33W.Xb7wUSpYggAvO5fhW95EF4ve",
    "idade": 22,
    "peso": 80,
    "etnia": "parda",
    "created_at": "2021-05-21T03:10:52.727Z",
    "updated_at": "2021-05-21T03:10:52.727Z"
  },
  {
    "id": "7cfba7d3-045c-4c98-b37a-9be658ae084d",
    "nome": "gabrie",
    "telefone": "8888888",
    "email": "gabriel@hotmil",
    "senha": "$2a$08$LMedr55JaByx5F5gusZ82OKzVTMzr0MVFvqrIRqfv0sKOovWQYdh2",
    "idade": 22,
    "peso": 80,
    "etnia": "parda",
    "created_at": "2021-05-21T03:50:58.006Z",
    "updated_at": "2021-05-21T03:50:58.006Z"
  },
  {
    "id": "39a00774-7391-4f52-a465-7bac72067f19",
    "nome": "gabriela",
    "telefone": "888888",
    "email": "gabriela@hotmil",
    "senha": "$2a$08$/c3o6ZDjE/SKD953agMdkOpbacSwDMjEXqdB7jZAaTs1p3swOmEX2",
    "idade": 22,
    "peso": 80,
    "etnia": "parda",
    "created_at": "2021-05-21T04:00:07.545Z",
    "updated_at": "2021-05-21T04:00:07.545Z"
  },
  {
    "id": "5ada1711-4474-4542-864a-5f48fb825897",
    "nome": "Diane",
    "telefone": "8888388",
    "email": "Diane@hotmil",
    "senha": "$2a$08$wdIS6sEias8T0QASle.zGeYuKsWFwSiWadMVcEITkUEuqQB707X5C",
    "idade": 22,
    "peso": 80,
    "etnia": "parda",
    "created_at": "2021-05-21T04:24:18.361Z",
    "updated_at": "2021-05-21T04:24:18.361Z"
  },
  {
    "id": "79cf672e-089d-41d6-95a6-2a6fea1f71d1",
    "nome": "Diana",
    "telefone": "88888",
    "email": "Diana@hotmil",
    "senha": "$2a$08$fB3oy.5BXEYpy/G7lvnO6O0svBNwOvuRsyeEPh1/ezxYOTzD1SOjy",
    "idade": 22,
    "peso": 80,
    "etnia": "parda",
    "created_at": "2021-05-21T05:07:06.336Z",
    "updated_at": "2021-05-21T05:07:06.336Z"
  }
]

>basicamente lista todos os usuários cadastrados, n tem muito segredo

***************************************************************************************

- Requisitar um único usuário

método get + /users/:id

{
  "id": "e4734f9d-5461-4d05-811d-b9e246aae9ec",
  "nome": "Diego",
  "telefone": "33394545",
  "email": "diego@hotmail",
  "senha": "$2a$08$REOjiVrt5EE.6OtSuppJQeIF.c5RRy3TcpO8QeJPPhQTWgDDdI5gi",
  "idade": 22,
  "peso": 80,
  "etnia": "parda",
  "created_at": "2021-05-21T02:35:37.744Z",
  "updated_at": "2021-05-21T02:35:37.744Z"
}

>Você precisa passar um id como parametro

***************************************************************************************

- Atualizar user

método put + /users/:id

>Primeiro você passa o id do usuário que quer editar
>Depois você edita o(s) campo(s) que quiser
{
  "nome": "Diego"
  
}

>Depois recebe a mensagem:
>{
  "message": "atualizado parceiro"
}

(não queria bancar o engraçado)

***************************************************************************************

- Remover user

método delete + /users/:id

>Primeiro você passa o id do usuário que quer deletar
>Depois é só deletar
>Você recebe a mensagem:

{
  "message": "excluido parceiro"
}

***************************************************************************************

# CRUD ADRESS

Observações:

Para poupar seu tempo, lhe informo que o crud de endereço está igual ao crud de users, exceto em algumas ocorrencias:


1 ocorrência:

- Requisitar todos os endereços

método get + /adress

[
  {
    "id": "22853dea-c0a6-4c5a-aec7-6f6591c44bab",
    "endereco": "rua pol",
    "numero": 54,
    "complemento": "ali",
    "cep": "8732873",
    "cidade": "salvador",
    "estado": "hmmm",
    "created_at": "2021-05-21T02:37:47.136Z",
    "updated_at": "2021-05-21T02:37:47.136Z",
    "users": {
      "id": "e4734f9d-5461-4d05-811d-b9e246aae9ec",
      "nome": "Diego",
      "telefone": "33394545",
      "email": "diego@hotmail",
      "senha": "$2a$08$REOjiVrt5EE.6OtSuppJQeIF.c5RRy3TcpO8QeJPPhQTWgDDdI5gi",
      "idade": 22,
      "peso": 80,
      "etnia": "parda",
      "created_at": "2021-05-21T02:35:37.744Z",
      "updated_at": "2021-05-21T02:35:37.744Z"
    }
  },
  {
    "id": "e4b722be-d669-4080-a971-1ff365caa9f1",
    "endereco": "rua policia",
    "numero": 54,
    "complemento": "alimba",
    "cep": "8732873",
    "cidade": "salvador",
    "estado": "hmmm",
    "created_at": "2021-05-21T03:12:44.129Z",
    "updated_at": "2021-05-21T03:12:44.129Z",
    "users": {
      "id": "5e5a567f-686c-4c75-80e0-4e80c0b68a31",
      "nome": "gabriel",
      "telefone": "88888888",
      "email": "gabriel@hotmail",
      "senha": "$2a$08$ZabdsQeKJ1SAD1vZceCUWeS.C33W.Xb7wUSpYggAvO5fhW95EF4ve",
      "idade": 22,
      "peso": 80,
      "etnia": "parda",
      "created_at": "2021-05-21T03:10:52.727Z",
      "updated_at": "2021-05-21T03:10:52.727Z"
    }
  }
]

>Nesse caso como repararam, o endereço retorna não só os seus dados cadastrados, como o do user amarrado a ele pelo join

****************************************************************************************
2 ocorrência


- Requisitar um endereço

método get + /adress/:id

{
  "id": "22853dea-c0a6-4c5a-aec7-6f6591c44bab",
  "endereco": "rua pol",
  "numero": 54,
  "complemento": "ali",
  "cep": "8732873",
  "cidade": "salvador",
  "estado": "hmmm",
  "created_at": "2021-05-21T02:37:47.136Z",
  "updated_at": "2021-05-21T02:37:47.136Z",
  "users": {
    "id": "e4734f9d-5461-4d05-811d-b9e246aae9ec",
    "nome": "Diego",
    "telefone": "33394545",
    "email": "diego@hotmail",
    "senha": "$2a$08$REOjiVrt5EE.6OtSuppJQeIF.c5RRy3TcpO8QeJPPhQTWgDDdI5gi",
    "idade": 22,
    "peso": 80,
    "etnia": "parda",
    "created_at": "2021-05-21T02:35:37.744Z",
    "updated_at": "2021-05-21T02:35:37.744Z"
  }
}

> Da mesma forma que a anterior, vocÊ recebe um usuário amarrado a esse endereço, a diferença é que aqui você passa o id como parâmetro
> *************************************************************************************

#ADENDOS:

>Para amarrar o usuário ao endereço, basta colocar no campo userId o id do usuário
>Se você quiser apagar o endereço, ou amarrar outro usuário, basta deletá-lo passando o id, e/ou inseri-lo novamente desta vez passando o id do usuário novo, respectivamente.



****************************************************************************************

