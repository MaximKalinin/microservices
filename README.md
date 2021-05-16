# Microfrontend
Basic structure of microfrontend application

## Description
This repository represents simple but effective structure for microfrontend organization and communication.

## Packages Sctructure
The app itself is divided into three packages: `app`, `ice-cream` and `auth`:
- `app` is the main entry point for the browser and a manager of other microservices;
- `ice-cream` package is secondary package, responsible for ice cream flavour pick from the user's input;
- `auth` package is secondary package, responsible for authenticating a user into the app.

## Microservice structure

### Development
Every microservice is built on their own, but for development purposes there's `dev` folder that is used as entry point for development server and is responsible for mounting the app and mocking global `state_manager` object.

### Global State Manager
`state_manager` object is the bridge between microservices that can provide subscriptions and actions. 
In this example `auth` microservice subscribes on `ice_cream` value, that is taken from `ice_cream` microservice and updated as soon as `ice_cream` provides the value.

### API
The microservice API should be the following:
- `mount` function that takes `HTMLElement` and mounts the app inside.
- `unmount` function should be executed in order to cleanup the application temp data.
- `init` function should be executed before every other module function with main `state_manager` as an argument in order to properly generate all the bridges.
- `subscribe` function is the hook that lets access internal app state.

The package can have even multiple `mount` and `unmount`  functions if it supposed to be rendered in two different places of the app. In this case you should handle proper module cleanup after unmounting all the components. However, `init` and `subscribe` should be always single.

All of the API should be used only inside main application, `app` in our case. 

### Libraries
In this case all the apps rely on `react` and `redux`, but they can be easily replaced with `vue`, `mobx` or any other implementation as soon as you provide proper API implementation for the microservice.

### Static rules
As some microservices might rely on other (via `state_manager` bridge), you need to ensure that required microservices always exist on the page together. One example is placing all the microservices in the root of a route and then making them show with triggering dedicated `state_manager` listeners.

## Electron
This structure can be used also in Electron projects with the logic that is triggered through the interface. Simply pay attention to execute code in the correct environment (node or browser).

## Development
In order to start development locally you need to run `yarn install` command in console in all three directories: `app`, `ice-cream` and `auth`.

If you would like to start one of secondary microservices, just execute `yarn start` command from the root of dedicated folder.

If you would like to start `app` microservice, you should build all the secondary microservices (see [build](#build) section) and link them inside the main one (see [linking](#Linking-dependencies) section).

## Build
To build secondary microservice, just go into root folder of the microservice and run `yarn build`. This will generate dist folder.
To build main microservice, you should first build all the secondary. The command is the same: `yarn build`.

## Linking dependencies
In order not to run `yarn --froce` command after every secondary microervice build, you might link it via package manager (either `yarn` or `npm`). Example for `auth` microservice:
```sh
# assuming you are in the root of repository
cd auth
yarn link
cd ../app
yarn link auth
```
