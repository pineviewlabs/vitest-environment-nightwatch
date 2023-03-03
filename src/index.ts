import nightwatch from 'nightwatch';
import {setup} from '@nightwatch/vue';

const globalSetup = async (options = {}) => {
  return nightwatch.createClient(
    Object.assign(
      {},
      {
        browserName: 'chrome',
        parallel: true,
        // enable_global_apis: true,
        always_async_commands: false,
        persist_globals: true,
        silent: true,
        headless: true,
        output: true
      },
      options
    )
  );
};

import type {Environment} from 'vitest';

export default <Environment>{
  name: 'nightwatch',
  async setup(g, opt) {
    const client = await globalSetup(opt);
    const browser = await client.launchBrowser();

    g.client = client;
    g.browser = browser;

    const viteServer = await setup({
      vite_dev_server: {
        port: null
      }
    });

    browser.launchUrl = `http://localhost:${viteServer.config.server.port}`;

    return {
      async teardown() {
        await viteServer.close();
        await browser.end();
      }
    };
  }
};
