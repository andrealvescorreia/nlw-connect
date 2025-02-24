# NLW Connect

[![NLW Connect](page.png)](https://nlw-connect.on.shiper.app/invites/0ed14984-337e-42c5-9660-6310817b0302)  
*Uma plataforma de inscrição para um evento fictício com sistema de indicação e ranking.*

## Sobre o Projeto
Esta aplicação foi desenvolvida durante a 19ª edição do NLW da Rocketseat. O objetivo foi criar uma página de inscrição para um evento fictício, onde os usuários podem gerar um link de convite para compartilhar com amigos. Aqueles que acumularem mais indicações aparecem no ranking top 3 e concorrem a prêmios exclusivos.

A página pode ser acessada [aqui](https://nlw-connect.on.shiper.app/invites/0ed14984-337e-42c5-9660-6310817b0302).

## Tecnologias Utilizadas
### Frontend
- [Next.js](https://nextjs.org/) - Framework React para SSR e SSG
- [Tailwind CSS](https://tailwindcss.com/) - Estilização responsiva
- [Zod](https://zod.dev/) - Validação do formulário de inscrição

### Backend
- [Fastify](https://www.fastify.io/) - Framework Node.js para APIs rápidas
- [Drizzle ORM](https://orm.drizzle.team/) - ORM para interação com o banco de dados
- [Zod](https://zod.dev/) - Validação de dados
- [Swagger](https://swagger.io/) - Documentação da API

### Banco de Dados
- [PostgreSQL](https://www.postgresql.org/) - Armazenamento de dados
- [Redis](https://redis.io/) - Cache para otimização de performance

---

## Como Rodar o Projeto

### Requisitos
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/) e [Redis](https://redis.io/) (caso não utilize o Docker)

### Configuração do Frontend
```sh
cd web
npm install
npm run dev
```
Crie um arquivo `.env` na raiz do projeto `web` e adicione:
```env
NEXT_PUBLIC_API_URL="http://localhost:3333"
```

### Configuração do Backend
```sh
cd server
```
Inicie os containers do PostgreSQL e Redis via Docker:
```sh
docker compose up -d
```
Instale as dependências e configure o banco de dados:
```sh
npm install
npm run db:migrate
npm run dev
```
Crie um arquivo `.env` na raiz do projeto `server` e adicione:
```env
PORT=3333
WEB_URL="http://localhost:3000"
POSTGRES_URL="postgresql://docker:docker@localhost:5432/nlw-connect"
REDIS_URL="redis://localhost:6379"
```

---

## Documentação da API
A documentação da API está disponível em:
[https://nlw-connect.on.shiper.app/docs](https://nlw-connect.on.shiper.app/docs)

## Plataformas utilziadas para o Deploy
- **Frontend em NextJS:** [Vercel](https://vercel.com/)
- **API Backend NodeJS:** [Shiper](https://shiper.app/)
- **Banco de Dados PostgreSQL:** [Neon.tech](https://neon.tech/)
- **Cache em Redis:** [Upstash](https://upstash.com/)

---

Feito com 💜 durante o NLW da Rocketseat 🚀

