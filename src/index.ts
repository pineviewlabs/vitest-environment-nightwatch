import { beforeEach, afterEach } from "vitest";
import nightwatch from "nightwatch";
// import {setup} from '@nightwatch/vue'

const globalSetup = async (options = {}) => {
  return nightwatch.createClient(
    Object.assign(
      {},
      {
        browserName: "chrome",
        parallel: true,
        // enable_global_apis: true,
        always_async_commands: false,
        persist_globals: true,
        silent: true,
        headless: true,
        output: true,
      },
      options
    )
  );
};

/* beforeEach(async (context) => {
  const client = await globalSetup({});

  context.browser = await client.launchBrowser();
});

afterEach(async ({ browser }) => {
  await browser.end();
  // await viteServer.close();
}); */
import type { Environment } from "vitest";

export default <Environment>{
  name: "nightwatch",
  async setup(g, opt) {
    const client = await globalSetup({});
    const browser = await client.launchBrowser();

    g.client = client
    g.browser = browser
    return {
      async teardown() {
        await browser.end();
      },
    };
  },
};
