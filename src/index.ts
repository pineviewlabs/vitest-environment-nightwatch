import nightwatch from 'nightwatch';

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

    return {
      async teardown() {
        await browser.end();
      }
    };
  }
};
