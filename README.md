

## Description

[BooksApi](https://localhost:8888), a simple api to show knowledge. 

## Installation

```bash
$ npm install
```
## Adding DB config
Inside de folder of the application
```
mkdir common/envs && touch common/.env && touch common/development.env
```
Then we add this variable to the files as you database configuration (OBS: here I am using PostgreSQL from [Linode](https://www.linode.com) but you can use other database see [TypeOrm](https://typeorm.io/))



```text
PORT=3000
BASE_URL=HTTP://localhost:3000
DATABASE_HOST=localhost
DATABASE_NAME=dbname
DATABASE_USER=user
DATABASE_PASSWORD=password
DATABASE_PORT=5432
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

#### - TODO

## Stay in touch

- Author - [Raphael](https://kamilmysliwiec.com)
- Linkedin - [@raphaelbenzi](https://www.linkedin.com/in/raphael-benzi/)

## License

Nest is [MIT licensed](LICENSE).
