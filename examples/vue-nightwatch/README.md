# Test your Vue Components with Vitest and Nightwatch

Choose Vue and TypeScript when prompted below:

```bash
npm init vite@latest
``` 

## Step 1: Install and Configure Vitest

```bash
npm i -D vitest @vitest/ui @vitest/plugin-vue
```

Since `vitest` is based on `vite`, you can use the same configuration file. Edit
the `vite.config.ts` file to add the following. You'll also need to add a
reference to Vitest types using a [triple slash
command](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-)
at the top of your config file. Adding the Nightwatch integration types would be
also helpful for adding types to the `environmentOptions.nightwatch` property.
See [this](https://github.com/Aslemammad/vitest-environment-nightwatch#types) for more information.

```ts 
/// <reference types="vitest" />

import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    environment: "nightwatch",
    environmentOptions: { nightwatch: {} },
  },
})
```

With Vitest [hooks](https://vitest.dev/api/#setup-and-teardown) we can inject
settings into the global browser object, for instance in this example we set the
`launchUrl`:
```ts
import {beforeAll, afterAll} from 'vitest';
import {setup} from '@nightwatch/vue';

beforeAll(async () => {
  globalThis.viteServer = await setup({
    vite_dev_server: {
      port: null
    }
  });

  browser.launchUrl = `http://localhost:${globalThis.viteServer.config.server.port}`;
});

afterAll(async () => {
  await browser.end();
  await globalThis.viteServer.close();
});
```

Now with running your tests, you have the Nightwatch
[globals](https://github.com/Aslemammad/vitest-environment-nightwatch#api) which can be used
like this:

```ts
describe('counter end-to-end test', async () => {
  test('should change count when button clicked', async () => {
    await browser.init();
    await browser.waitForElementVisible('body');

    const button = await browser.getByRole('button');

    await browser.expect.element(button).to.have.text.that.equals('count is 0');
		...
```

Check the `src/` and `test/` directories for further information.
