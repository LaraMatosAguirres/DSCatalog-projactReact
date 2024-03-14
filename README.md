# DS Catalog

MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


# Sobre o projeto

DS Catalog é uma aplicação Full Stack web e mobile construída durante o Bootcamp  **Spring React**, ministrado pela [DevSuperior](https://devsuperior.com/).

O software consiste em uma aplicação de catálogo de produtos, onde há três tipos de permissões, a do usuário não autenticado, que pode apenas visualizar os produtos, a do usuário com perfil operador, que pode também adicionar categorias ou produtos e a do usuário administrador, que além das outras permissões, também pode gerenciar os outros usuários da aplicação.

Neste projeto também foram trabalhados tópicos como testes com Junit, integração com storage de imagens na AWS, além de CI/CD e implantação com Docker e AWS. 

## Layout web

![Web 1](https://raw.githubusercontent.com/LaraMatosAguirres/dscatalog/main/assets/home-frontend.png)

![Web 2](https://raw.githubusercontent.com/LaraMatosAguirres/dscatalog/main/assets/catalogo-frontend.png)

![Web 3](https://raw.githubusercontent.com/LaraMatosAguirres/dscatalog/main/assets/produtos-frontend.png)

![Web 4](https://raw.githubusercontent.com/LaraMatosAguirres/dscatalog/main/assets/produtos-edicao-frontend.png)

![Web 5](https://raw.githubusercontent.com/LaraMatosAguirres/dscatalog/main/assets/formulario-usuarios-frontend.png)

## Modelo conceitual

[![Modelo Conceitual](https://raw.githubusercontent.com/LaraMatosAguirres/dscatalog/main/assets/modelo-conceitual.png)](https://raw.githubusercontent.com/LaraMatosAguirres/dsdeliver-sds2/main/assets/modelo-conceitual.png)

# Tecnologias utilizadas

## Back end

- Java
- Spring Boot
- JPA / Hibernate
- Maven
- OAuth/JWT
- Junit

## Front end

- HTML / CSS / Sass/ Bootstrap/ JS / TypeScript
- ReactJS
- Axios
- React Hook Forms
- React Select

# Como executar o projeto

## Back end

Pré-requisitos: Java 11

```
# clonar repositório
git clone https://github.com/LaraMatosAguirres/DSCatalog-projectReact.git

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web

Pré-requisitos: npm / yarn

```
# clonar repositório
git clone https://github.com/LaraMatosAguirres/DSCatalog-projectReact.git

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

Lara Matos Aguirres

https://www.linkedin.com/in/lara-matos-aguirres-3a632b244/
