# Code Challange Full Stack

Projeto desenvolvido para o desafio técnico da Boticário.

Intitulado "Checkfy", este projeto consiste em um sistema de check-ins em academias.

## Instruções de Uso

```bash
  npm install
  npm run dev
```

A aplicação irá rodar na url http://localhost:3005/

Certifique-se de que a api esteja no ar antes de rodar o front-end.

Repositório back-end: https://github.com/caiosamarone/challange-api

#### Atenção

O portal possui 2 tipos de acessos.

- Admin
- Usuário

O login é persistido atráves de local storage.

### Admin

- O usuário admin DEVERÁ se logar com as seguintes credenciais:
- Email: admin@admin.com
- Senha: admin

- O admin não deverá acessar a rota /home, onde usuários realizam check-ins.

### Usuário

- O usuário DEVERÁ criar uma conta antes de realizar o login.

- O admin não deverá acessar a rota /admin, onde o admin gerencia academias e usuários.

- O usuário, ao se logar, escolherá uma academia para fazer o check-in.

- O usuário pode fazer check-in apenas uma vez por dia.

## Stacks

- React.Js
- Typescript
- Antdesign

## Snapshots

### Usuário

![Texto Alternativo](https://i.imgur.com/aYDw4jg.pngg)

![Texto Alternativo](https://i.imgur.com/KnLhB8f.png)

![Texto Alternativo](https://i.imgur.com/eHdX3wX.png)

![Texto Alternativo](https://i.imgur.com/OtvE16K.png)

### Admin

![Texto Alternativo](https://i.imgur.com/nJz9Sxp.png)

![Texto Alternativo](https://i.imgur.com/eoy75YY.png)

![Texto Alternativo](https://i.imgur.com/PgbpTkM.png)

![Texto Alternativo](https://i.imgur.com/BIc0oiS.png)

![Texto Alternativo](https://i.imgur.com/DbrqPlG.png)
