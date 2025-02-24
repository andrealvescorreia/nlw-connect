# NLW Connect

![NLW Connect](https://your-image-url.com/banner.png)  
*Uma plataforma de inscrição para eventos fictícios com sistema de indicação e ranking.*

## Sobre o Projeto
Esta aplicação foi desenvolvida durante a 19ª edição do NLW da Rocketseat. O objetivo é criar uma página de inscrição para um evento fictício, onde os usuários podem gerar um link de convite para compartilhar com amigos. Aqueles que acumularem mais indicações aparecem no ranking top 3 e concorrem a prêmios exclusivos.

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
```
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
```
PORT=3333
WEB_URL="http://localhost:3000"
POSTGRES_URL="postgresql://docker:docker@localhost:5432/nlw-connect"
REDIS_URL="redis://localhost:6379"
```

---

## Documentação da API
A documentação da API está disponível em:
[https://nlw-connect.on.shiper.app/docs](https://nlw-connect.on.shiper.app/docs)

## Deploy
- **Frontend:** [Vercel](https://vercel.com/)
- **Backend:** [Shiper](https://shiper.app/)
- **Banco de Dados:** [Neon.tech](https://neon.tech/)
- **Cache:** [Upstash](https://upstash.com/)

---

Feito com 💜 durante o NLW pela Rocketseat 🚀

