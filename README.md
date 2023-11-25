This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Começando

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

## Trabalhando com containers

Passe as variaveis de ambiente no arquivo .env ou .env.development. Depois rode os containers com o seguinte comando:

```
$ docker compose up -d

```

### Rodando o Dbeaver

```
$ docker container run --name dbeaver -p 80:80  -network <your-network> -e dbeaver -d

```
