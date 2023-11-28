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

Passe as variaveis de ambiente no arquivo .env ou .env.development.

<!-- Crie um drive de internet local:

```
docker network create mypp_network

``` -->

Rode os containers com o seguinte comando:

```
docker compose --profile frontend up -d

```

Rodando manualmente os containers

<!-- -   Redis

```

docker container run -d --name redis --network mypp-network -v local-redis-stack.conf:/redis-stack.conf -p 6379:6379 --restart=unless-stopped redis

``` -->

-   Postgres

```

docker container run -d --name postgres --network mypp-network -v ./pg-data:/var/lib/postgresql/data -p 5435:5435 --restart=unless-stopped postgres

```

<!-- * Redis Insight

```

docker container run -d --name redis-insight --network mypp-network -p 8001:8001 --restart=unless-stopped redislabs/redisinsight:latest

``` -->

-   Cloudbeaver

```

docker container run -d --name cloudbeaver --network mypp-network -v ./cloudbeaver/workspace:/opt/cloudbeaver/workspace -p 8978:8978 --restart=unless-stopped dbeaver/cloudbeaver

```

-   Redis Stack

```
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 -v ./redis-stack:/data --restart=unless-stopped redis/redis-stack:latest

```
