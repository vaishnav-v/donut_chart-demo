# 🅰️ngular v17 Starter Template ![GitHub License](https://img.shields.io/github/license/WEBO-Digital/angular-v17-starter) ![Static Badge](https://img.shields.io/badge/-20.10.0-g?style=&logo=node.js&logoColor=white) ![Static Badge](https://img.shields.io/badge/PRs-welcome-g)

Generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9, this template features following technologies:

- [Angular](https://angular.io/) - a platform and framework for building single-page client applications using HTML and TypeScript.
- [Tailwind CSS](https://tailwindcss.com/) - a utility-first CSS framework for rapidly building custom designs.
- [Jest](https://jestjs.io/) - a delightful JavaScript Testing Framework with a focus on simplicity.
- [Vitest](https://vitest.dev/) - Next Generation Testing Framework.
- [ESLint](https://eslint.org/) - a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [Prettier](https://prettier.io/) - an opinionated code formatter that supports various languages.
- [Husky](https://typicode.github.io/husky/) - a tool that makes Git hooks easy.

## Development server 🧑‍💻

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding ⚓

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build 🔨

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests 🧪

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/).

## Running end-to-end tests 📺

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Enabling Server Side Rendering 💽

To add SSR to an existing project, use the Angular CLI `ng add` command.
These commands create and update application code to enable SSR and adds extra files to the project structure.

```
my-app
|-- server.ts                       # application server
└── src
    |-- app
    |   └── app.config.server.ts    # server application configuration
    └── main.server.ts              # main server application bootstrapping
```

To verify that the application is server-side rendered, run it locally with ng serve. The initial HTML request should contain application content.

## Further help 🆘

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
