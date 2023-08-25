## Installation

```bash
# copy .env file
$ cp .env.example .env

# install dependencies
$ yarn install
```

## Database development

```bash
# create migration file
$ yarn run typeorm migration:create src/database/mysql/migrations/[migration-name]

# run migrations
$ yarn run typeorm:run-migrations
```

## Running the app

```bash
# start docker container
$ docker-compose up

# run migrations and start server
$ yarn start

# start server in watch mode
$ yarn start:dev
```
