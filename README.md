# Angular Standalone APIs

## Table of contents
- [Motivation](#motivation)
- [Goals](#goals)
- [APIs](#apis)
- [Demo](#demo)


## Motivation
- Angular is one of the only web frameworks where components are not the "units of reuse"
- Components have implicit dependencies on their `NgModule` context
- Angular conceptually centered around `NgModule`
  - Libraries publish it
  - Lazy-loading is centered around it
  - Developers new to Angular need to learn about this concept


## Goals
- Make `NgModule` optional
- Simplifies the mental model of Angular
- Make components, directives, and pipes self-contained
- Existing `NgModule`s should not block the use of the new APIs
- Reduce boilerplate code where possible
- Use standalone functions instead of methods, for tree-shakability


## APIs
- Bootstrapping
  - `bootstrapApplication()` - bootstrap standalone component
  - `provide*()` - set of functions to configure the application
  - `provideRouter()` - configure the application routes
  - `provideHttpClient()` - configure HttpClient
  - `importProvidersFrom()` - import providers from the specified `NgModule`s
- Routing
  - `Route.loadComponent` - lazy-load standalone component
  - `CanMatchFn` - guard function, replacement for `CanMatch` service
  - `CanActivateFn` - guard function, replacement for `CanActivate` service
  - `CanDeactivateFn` - guard function, replacement for `CanDeactivate` service
- Standalone
  - `@Pipe({ standalone: true })` - do not need to be declared in an `NgModule`
  - `@Directive({ standalone: true })` - do not need to be declared in an `NgModule`
  - `@Component({ standalone: true })` - do not need to be declared in an `NgModule`
- DI
  - `inject()` - injects a token from the currently active injector (supported in [injection context](https://angular.io/guide/dependency-injection-context))


## Demo
- `yarn install --frozen-lockfile` - initialize the project
- `yarn start` - start the app wrapped with `NgModule` ([main.ts](src/main.ts))
- `yarn start:standalone` - start the app without `NgModule` ([main-standalone.ts](src/main-standalone.ts))
