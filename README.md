  ![Ecoleta][logo-image]

  ## Projeto desenvolvido na NLW #01 da RocketSeat.
  ---
  [![License: MIT][license-image]][license-link]<br>
  ![Deploy Develop - Test, Build & Redeploy](https://github.com/marconwillian/Ecoleta/workflows/Deploy%20Develop%20-%20Test,%20Build%20&%20Redeploy/badge.svg?branch=develop)<br>
  ![Deploy - Test, Build & Redeploy](https://github.com/marconwillian/Ecoleta/workflows/Deploy%20-%20Test,%20Build%20&%20Redeploy/badge.svg?branch=main)

  Esse projeto foi feito com a intensão de platicar meus conhecimentos na stack do JavaScript usando o superset **typescript**.
  Este projeto foi feito com 3 técnologias basicas, que forão divididas em repositórios diferente, são elas:
  - [Node.js - server][repo-backend]
  - [React.js - client][repo-frontend]
  - [React Native - mobile][repo-mobile]

  Abaixo vamos tudo sobre o nosso projeto para **backend**.

  ## :rocket: Tecnologias

  - Main Libs
    - [![express (latest)](https://img.shields.io/npm/v/express/latest?label=Express&style=flat-square)][npm-express] | Usado para configurar as rotas e fazer a aplicação ouvir uma porta especifica (port:3333).
    - [![knex (latest)](https://img.shields.io/npm/v/knex/latest?label=knex.js&style=flat-square)][npm-knex] | Usado para itegrar a aplicação com o banco de dados, neste caso usado o Sqlite3 no ambiente de desenvolvimento, e para testes e para produção será usado um postgres do heroku.
    - [![react (latest)](https://img.shields.io/npm/v/react/latest?label=React.js&style=flat-square)][npm-react] | React é uma biblioteca JavaScript declarativa, eficiente e flexível para o desenvolvimento de interfaces para usuários.

  ## :minidisc: Descrição
  O projeo em si é um sistema de coleta de lixos e descartaveis, unindo as empresas que fazem estas coletas com as pessoas que precisa descartar algo, sendo que a empresa vai usar a langing page para cadastrar seus pontos, e o usuário vai poder ver os pontos pelo app.

  - Backend: [api.ecoleta.marcon.run](https://api.ecoleta.marcon.run/)
    - Collection Postman: [getpostman.com/collections/9479a46ad574fb03b511](https://www.getpostman.com/collections/9479a46ad574fb03b511)
    - Docs on Postman: [documenter.getpostman.com/view/10671045/Tzsfm5Nd](https://documenter.getpostman.com/view/10671045/Tzsfm5Nd)
  - Frontend: [ecoleta.marcon.run](https://api.ecoleta.marcon.run/)
  - Mobile App (android): [Play Store][link-mobile-app]
  
  ****
  Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE][license-link] para mais detalhes.


  <!-- Markdown link & img's -->
  [logo-image]: /assets/green-readme.png
  [license-image]: https://img.shields.io/badge/License-MIT-yellow.svg
  [license-link]: /LICENSE
  [link-mobile-app]: https://play.google.com/store/apps/details?id=dev.mh4sh.ecoleta
  [repo-backend]: /server
  [repo-frontend]: /client
  [repo-mobile]: /mobile
  [npm-react]: https://www.npmjs.com/package/react
  [npm-express]: https://www.npmjs.com/package/express
  [npm-knex]: https://www.npmjs.com/package/knex