# My Dev Space

[![Build Status](https://travis-ci.com/apoclyps/my-dev-space.svg?token=putHnyd9Fyt2bwsGacCD&branch=master)](https://travis-ci.com/apoclyps/my-dev-space?token=putHnyd9Fyt2bwsGacCD&branch=master)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
[![All Contributors](https://img.shields.io/badge/all_contributors-6-green.svg)](#contributors)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](http://makeapullrequest.com)
![Code of Conduct](https://img.shields.io/badge/%E2%88%9A-Code%20of%20Conduct-blue.svg)

> A open source developer community to promote local hackathons, conferences, and meetups, mentoring, calls for speakers, and collaboration.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

* [Docker](https://docs.docker.com/install/) - Used to build, ship, and run all services
* [Python](https://maven.apache.org/) - Dependency Management
* [Node](https://rometools.github.io/rome/) - Used to generate RSS Feeds

### Setting up local development

The following steps will checkout the repository, install the dependencies needed for the React frontend and run the service on `http://localhost`.

```bash
$ git clone https://github.com/apoclyps/my-dev-space
$ cd my-dev-space/services/client
$ npm install
$ cd ../../
$ docker-compose -f docker-compose-dev.yml up -d
```

Once the service is up and running, you will need to manually run the migrations and seed data required to configure the local postgres instance.

```bash
$ docker-compose run users-service python manage.py recreate_db
$ docker-compose run users-service python manage.py seed_db
```

And to tear down the local development stack, simply run:

```
$ docker-compose down
```

## Running the tests

The following will run the unit tests for each respective service:

###### `client`
```bash
$ docker-compose -f docker-compose-dev.yml run client run client npm test
```

###### `users-service`
```bash
$ docker-compose -f docker-compose-dev.yml run users-service python manage.py test
```

### Running linting

###### `client`
```bash
$ docker-compose -f docker-compose-dev.yml run client npm lint
```

###### `users-service`
```bash
$ docker-compose -f docker-compose-dev.yml run users-service flake8 project
```

### Running code coverage
```bash
$ docker-compose -f docker-compose-dev.yml run users-service python manage.py cov
```

##### End to End tests
Integration tests used to evaluate all services behave correctly

```bash
$ npm install testcafe -g
$ export TEST_URL='http://localhost'
$ testcafe chrome e2e
```

## Deployment

Deployments to the staging and production environments require a PR to be opened against the staging/production branches; Upon successfully merging a PR into either branch; Travis CI will build, run, test, and deploy the changes to AWS ECS.

## Built With

* [React](http://www.dropwizard.io/1.0.2/docs/) - Javascript client framework
* [Flask](https://maven.apache.org/) - Python web framework
* [Postgres](https://www.postgresql.org/) - Relational Database Management System
* [Docker](https://rometools.github.io/rome/) - Build, run, and deploy services
* [Swagger](https://swagger.io/) - Generate API documentation
* [Nginx](https://www.nginx.com/) - high-performance HTTP server, reverse proxy


## Contributors

A list of contributors who participated in this project.

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/1443700?s=460&v=4" width="100px;"/><br /><sub><b>Kyle</br>Harrison</b></sub>](https://github.com/apoclyps)<br /> | [<img src="https://avatars1.githubusercontent.com/u/17544636?s=460&v=4" width="100px;"/><br /><sub><b>Ewa Grabowiecka</b></sub>](https://github.com/TheMicroGirl)<br /> | [<img src="https://avatars3.githubusercontent.com/u/6596210?s=460&v=4" width="100px;"/><br /><sub><b>Adam</br> Smith</b></sub>](https://github.com/FatalEnigma)<br />| [<img src="https://avatars1.githubusercontent.com/u/9554484?s=460&v=4" width="100px;"/><br /><sub><b>Dermot</br>McAteer</b></sub>](https://github.com/DermotMcAteer)<br />| [<img src="https://avatars1.githubusercontent.com/u/16101792?s=460&v=4" width="100px;"/><br /><sub><b>Michael</br>Grundie</b></sub>](https://github.com/MichaelGrundie)
| :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars2.githubusercontent.com/u/2376829?s=460&v=4" width="100px;"/><br /><sub><b>Peter </br>Stevenson</b></sub>](https://github.com/goldencrow)<br />| [<img src="https://avatars2.githubusercontent.com/u/28186624?s=460&v=4" width="100px;"/><br /><sub><b>Kim </br>Moylan</b></sub>](https://github.com/kimmoylan)<br />
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.
