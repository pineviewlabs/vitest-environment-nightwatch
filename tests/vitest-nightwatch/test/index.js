import {beforeAll, afterAll} from 'vitest';
import {setup} from '@nightwatch/vue';

beforeAll(async () => {
  // extend context
  globalThis.viteServer = await setup({
    vite_dev_server: {
      port: null
    }
  });

  browser.launchUrl = `http://localhost:${globalThis.viteServer.config.server.port}`;
});

afterAll(async () => {
  await browser.end();
  await viteServer.close();
});
