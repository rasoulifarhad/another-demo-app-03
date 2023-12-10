# AnotherDemoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

See https://stackblitz.com/angular/argbonpbgrv?file=src%2Fapp%2Fheroes%2Fhero-detail%2Fhero-detail.component.html,src%2Fapp%2Fauth%2Flogin%2Flogin.component.css,src%2Fapp%2Fselective-preloading-strategy.service.ts
See https://docs.angular.lat/guide/router-tutorial-toh
See https://github.com/PacktPublishing/Learning-Angular-Fourth-Edition/tree/main
See https://stackblitz.com/angular/lmgmmarpvdrb?file=src%2Fapp%2Fhero-detail%2Fhero-detail.component.ts
See https://stackblitz.com/angular/argbonpbgrv?file=src%2Fapp%2Fapp-routing.module.ts
See https://docs.angular.lat/guide/singleton-services#forRoot-router
See https://www.concretepage.com/angular/angular-functional-route-guards
See https://stackblitz.com/angular/argbonpbgrv?file=src%2Fapp%2Fheroes%2Fhero-list%2Fhero-list.component.ts


Recommended pattern for Angular applications:

- Each feature area resides in its own folder.
- Each feature has its own Angular feature module.
- Each area has its own area root component.
- Each area root component has its own router outlet and child routes.
- Feature area routes rarely (if ever) cross with routes of other features.

A guard's return value controls the router's behavior:

- If it returns true, the navigation process continues.
- If it returns false, the navigation process stops and the user stays put.
- If it returns a UrlTree, the current navigation cancels and a new navigation is initiated to the UrlTree returned.



Note: The guard can also tell the router to navigate elsewhere, effectively canceling the current navigation. When doing so inside a guard, the guard should return false;

The router supports multiple guard interfaces:

- CanActivate to mediate navigation to a route.
- CanActivateChild to mediate navigation to a child route.
- CanDeactivate to mediate navigation away from the current route.
- Resolve to perform route data retrieval before route activation.
- CanLoad to mediate navigation to a feature module loaded asynchronously.


Generate an AuthGuard in the auth folder.

```sh
ng generate guard auth/auth
```

```sh
ng generate service auth/auth
```

