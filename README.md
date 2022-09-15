# Pipe Tasks

<h4 align="center">
	🚧  Pipe Tasks 🚀 Em andamento ..... 🚧
</h4>

## Tópicos

<div>
 • <a href="#-sobre-o-pipe-tasks">Sobre o Pipe Tasks</a> </br>
 • <a href="#-tecnologias">Tecnologias</a> </br>
 • <a href="#-funcionalidades">Funcionalidades</a> </br>
 • <a href="#-estrutura-de-pastas">Estrutura de pastas</a> </br>
 • <a href="#-design-system">Design System</a> </br>
 • <a href="#-layout">Layout</a> </br>
 • <a href="#-como-executar-o-projeto">Como executar</a> </br>
 • <a href="#-autor">Autor</a> </br>
 • <a href="#user-content--licença">Licença</a></br>
</div>

## 💻 Sobre o Pipe Tasks

Pipe Tasks é uma aplicação ...

## 🚀 Tecnologias

Tecnologias e ferramentas utilizadas no desenvolvimento do projeto:

#### **Website** ( [Next](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/) )

- [React Hook Form](https://react-hook-form.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Axios](https://github.com/axios/axios)
- [StyledComponents](https://styled-components.com/)
- [React Modal](https://reactcommunity.org/react-modal/)

#### **Utilitários**

- Protótipo: **[Figma](https://www.figma.com/)** → **[Protótipo (Pipe Tasks)](https://www.figma.com/file/JNFmQ73rsYVs0jg8pMNTOw/Pipe-Tasks)**
- Editor: **[Visual Studio Code](https://code.visualstudio.com/)** → Extensions: **[Prettier](https://prettier.io/)** + **[EditorConfig](https://editorconfig.org/)**
- Fontes: **[Manrope](https://fonts.google.com/specimen/Manrope)**
- Versionamento: **[Git](https://git-scm.com)**
- Padronização de código: **[ESLint](https://eslint.org/)**

## ⚙️ Funcionalidades

- [ ] Adicionar verificação do que foi digitado no input da página SignIn e SignUp;
- [ ] Adicionar as imagens do Layout na aba de Layout do Github;
- [ ] Adicionar link do repositório back end do Davi;
- [ ] https://www.youtube.com/watch?v=ngVU74daJ8Y 23 minutos
- [ ] Adicionar drawer na SideBar
- [ ] Limitar a largura da SideBar
- [ ] Criar o componente NavLink, que vai ser cada link da sidebar

## 🛠 Estrutura de pastas e componentes

Afim de facilitar a organização e manutenção do código, foi definido um padrão para organização das pastas neste projeto.

→ \_assets: Contém a estilização global, icones, tema da aplicação, itens de estilo que são reutilizáveis e imagens; <br />
→ components: Todos os componentes globais do projeto; <br />
→ context: Armazena os contextos da aplicação; <br />
→ containers: Armazena os containers que se repetem na aplicação; <br />
→ helpers: Funções para formatação de datas, funções para formatação de números, etc; <br />
→ hooks: Custom hooks; <br />
→ pages: Armazena as páginas da aplicação; <br />
→ routes: Armazena as rotas da aplicação; <br />
→ services: Todos os acessos externos; <br />

Todos os componentes criados vão seguir uma mesma estrutura de organização:
→ index.tsx: Responsável por exportar o componente; <br />
→ interface.ts: Responsável por exportar as interfaces; <br />
→ styles.ts: Responsável por toda estilização do componente; <br />

A pasta com as páginas vai seguir uma sequência lógica parecida com os demais componentes e estruturas
→ /components: Componentes que são utilizados apenas naquela páginas; <br />
→ index.tsx: Responsável por exportar a página; <br />
→ interface.ts: Responsável por exportar as interfaces que são utilizadas globalmente na página; <br />
→ styles.ts: Responsável por toda estilização da página; <br />

## 🎨 Design System

Com base na repetição dos componentes, foi criado um Design System para otimizar a composição das páginas e layout das aplicações. O design system vai ser responsável por armazenar toda a estilização dos componentes reutilizáveis que utilizamos, e vamos alterar entre as variações com apenas algumas propriedades que passamos para o componente.

## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/JNFmQ73rsYVs0jg8pMNTOw/Pipe-Tasks">
  <img alt="Made by vitor" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

Adicionar imagens do layout

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:

1. Backend (pasta server)
2. Frontend (pasta client)

💡 O Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando a aplicação web (Backend)

```bash
# Clone este repositório
$ git clone https://github.com/vitorrsousaa/PipeTasks-client.git
# Vá para a pasta da aplicação Front End
$ cd server
# Instale as dependências
yarn install
# Rode a aplicação
yarn start
# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

---

#### 🧭 Rodando a aplicação web (Frontend)

```bash
# Clone este repositório
$ git clone https://github.com/vitorrsousaa/PipeTasks-client.git
# Vá para a pasta da aplicação Front End
$ cd client
# Instale as dependências
yarn install
# Rode a aplicação
yarn start
# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

---

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

## 🧑🏻 Autor

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/94024958?v=4" width="100px;" alt=""/>
 <b>Vitor Sousa</b>🚀
<br />

Feito por Vitor Sousa 👋🏻 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Vitor%20Sousa-ff512f?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vitorr-sousaa//)](https://www.linkedin.com/in/vitorr-sousaa//)
[![Gmail Badge](https://img.shields.io/badge/-v.sousa.cf@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:v.sousa.cf@gmail.com)](mailto:v.sousa.cf@gmail.com)

## 📝 Licença
