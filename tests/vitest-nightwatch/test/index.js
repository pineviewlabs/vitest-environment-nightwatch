import {beforeAll, afterAll} from 'vitest';
import {setup} from '@nightwatch/vue';

beforeAll(async (context) => {
  // extend context
  context.viteServer = await setup({
    vite_dev_server: {
      port: null
    }
  });

  browser.launchUrl = `http://localhost:${context.viteServer.config.server.port}`;
});

afterAll(async ({viteServer}) => {
  await browser.end();
  await viteServer.close();
});
