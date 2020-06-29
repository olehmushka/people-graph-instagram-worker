# People Graph Instagram Worker

## Installation
The microservice requires a local installation of Node.js using [specific version](https://nodejs.org/uk/download/) only or use [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md) and choose an appropriate version. See version in package.json 

## Configuration
For correct work of the service, the list of environment variables have to be filled appropriately. While filling up the values, start by copying the `.env.example` template to system-required `.env` file by command:
```
cp .env.example .env
```
Thereafter these variables must be filled by values according to their definition below.

#### Environment variables

```
NAME - definition (default value)

# Common
LOG_LEVEL - pino logger loglevel (info)
DATETIME_FORMAT - datatime format of application (YYYY-MM-DDTHH:mm:ssZ)

# Worker
WORKER_PORT - port of worker (3001)

# Instagram
INSTAGRAM_HOST - host of instagram
INSTAGRAM_LOGIN_PATH - instagram's path for login page
INSTAGRAM_LOGIN_EMAIL - email for instagram account
INSTAGRAM_LOGIN_PASSWORD - password for instagram account
```

These might be appended by additional variables for local deployment in .env file. See .env.example file for default environment definition.

## Operations
After all the configurations above are done, these operations can be performed:
To build a service, run the commands below in project folder:
```
$ yarn install
$ yarn build
```
To start a standalone service, run the commands below in project folder:
```
$ yarn start
```
To run a service's tests coverage, run the commands below in project folder:
```
$ yarn test:coverage
```

## Versioning

We modify app version according to [Semantic Versioning](https://semver.org/) documentation.
But it can be changed only after release:
Examples:

- `*.1.*` to `*.2.0` if a release contains features;

- `*.*.1` to `*.*.2` if a release contains bug fixing;

## Maintainers
- Oleh Mushka
