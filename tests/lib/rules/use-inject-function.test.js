const { RuleTester } = require("eslint");
const path = require("path");

const rule = require(path.resolve(
  __dirname,
  "../../../lib/rules/use-inject-function"
));

const ruleTester = new RuleTester({
  languageOptions: {
    parser: require("@typescript-eslint/parser"),
    ecmaVersion: "latest",
    sourceType: "module",
  },
});

ruleTester.run("no-constructor-injection", rule, {
  valid: [
    {
      code: `
        import { inject } from '@angular/core';
        import { SomeService } from 'myService';
 
        class Example { 
          private service = inject(SomeService);         
        }
      `,
    },
    {
      code: `
        class NoInjectionExample {
          constructor() {}
      }
      `,
    },
  ],
  invalid: [
    {
      code: `
      import {SomeService} from 'myService';
        class Test {
          constructor(private service: SomeService) {}
        }
      `,
      errors: [{ messageId: "ConstructorBasedDependencyInjection" }],
    },
    {
      code: `
      import {SomeService} from 'myService';
        class Test {
          constructor(public service: SomeService) {}
        }
      `,
      errors: [{ messageId: "ConstructorBasedDependencyInjection" }],
    },
    {
      code: `
      import {ApiService} from 'myApiService';
      import {Logger} from 'myLogger';
        class AnotherTest {
          constructor(protected api: ApiService, private logger: Logger) {}
        }
      `,
      errors: [{ messageId: "ConstructorBasedDependencyInjection" }],
    },
  ],
});
