| CI / CD | Status |
| ------- | ------ |
| NPM | [![npm version](https://badge.fury.io/js/rangedates.svg)](https://badge.fury.io/js/rangedates) |
| Semaphore CI | [![Build Status](https://sineverba.semaphoreci.com/badges/npm-pkg-rangedates/branches/master.svg)](https://sineverba.semaphoreci.com/projects/npm-pkg-rangedates) |
| Circle CI | [![CircleCI](https://circleci.com/gh/sineverba/npm-pkg-rangedates.svg?style=svg)](https://circleci.com/gh/sineverba/npm-pkg-rangedates) |
| Coverall | [![Coverage Status](https://coveralls.io/repos/github/sineverba/npm-pkg-rangedates/badge.svg?branch=master)](https://coveralls.io/github/sineverba/npm-pkg-rangedates?branch=master) |
| SonarCloud | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=npm-pkg-rangedates&metric=alert_status)](https://sonarcloud.io/dashboard?id=npm-pkg-rangedates) |

`rangedates` returns an object starting from one or two dates.

## Installation
`npm install @sineverba/rangedates`

## Usage

| Props | Required | Default |
| ----- | -------- | ------- |
| dateStart | N | today |
| dateEnd | N | today |
| outputFormat | N | "YYYY-MM-DD" |


```js
import { rangedates } from "@sineverba/rangedates";

const dateStart = "01/01/2024";
const dateEnd = "30/01/2024";
const outputFormat = "YYYY-MM-DD";

const result = rangedates(dateStart, dateEnd, outputFormat);
console.log(result);
```

It returns

```
{
  startDate: "2024-01-01",
  endDate: "2024-01-30"
}
```

## Tests

`npm run test` for simple test

`npm run coverage` for coverage
