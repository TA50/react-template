![This is the formating status](https://github.com/ta50/react-template/actions/workflows/Format.yml/badge.svg)
 ![This is the linting status](https://github.com/ta50/react-template/actions/workflows/Lint.yml/badge.svg) ![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square) 

# React Template
this repo will make your life easier creating react application with a perfect architecture.

# First startup
- First install yarn : 
```
npm install -g yarn
```
- install dependencies: 
```
yarn install
```
- build dependencies: 
```
yarn build
``` 
# Project Architecure. 
I am using Yarn workspaces here to split the solutioin into different projcets
## @flash-cards/models

Contains only database or api models (Dtos)

## @flash-cards/repositories 
Contains only abstractions of Sources of data (Api, firebase, ….). Also may contain other DTOS. 
### deps:
- @flash-cards/models

		
## @flash-cards/firebase

Contains implementation of the repositories abstractions using firebase.
### deps:

- @flash-cards/models
- @flash-cards/repositories

## @flash-cards/infrastructure
contains the core services consumed by the application
## @flash-cards/ui
Contains the actual React.JS application
### deps: 
- @flash-cards/models
- @flash-cards/repositories
- @flash-cards/infrastructure

