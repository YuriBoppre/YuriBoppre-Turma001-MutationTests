# Teste de Mutação (Stryker)

## GitHub Actions

[![Build and Tests](https://github.com/ugioni/unit-tests-jest/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/ugioni/unit-tests-jest/actions/workflows/node.js.yml)

## SonarCloud

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ugioni_unit-tests-jest&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ugioni_unit-tests-jest)

## Stryker

To ensure not only that the code works, but that our unit tests are truly effective, this project uses mutation testing with Stryker.

This technique introduces small bugs (mutants) into the source code and runs the test suite for each one. If a test fails, the mutant is considered killed (which is good). If all tests pass, the mutant survives, indicating a weakness in the tests that needs to be fixed.

## Getting Started

In order to execute this project you must follow the steps below:

1. Install [Node JS](https://nodejs.org/) (version >= 20.x)
1. Run `npm install` to install all the project dependencies
1. Run `npm run test` to execute the entire test suite
1. Run `npm run coverage` to execute the entire test suite with coverage
1. Run `npm run test:mutation` to run mutation tests and check the effectiveness of the unit tests.


All execution artifacts can be found in `./coverage`, if you want to remove these files run `npm run clean`.

## Project Structure
</br>
<ul>
    <li>src: source code</li>
    <li>test: unit test files</li>
</ul>
