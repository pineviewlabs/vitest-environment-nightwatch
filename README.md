# vitest-environment-nightwatch

<p align=center>
  <img alt="Nightwatch.js Schematic Logo" src=".github/assets/nightwatch-logo.svg" width=200 />
</p>

[![version][version-badge]][package]
[![Discord][discord-badge]][discord]
[![MIT License][license-badge]][license]

**[Nightwatch](https://nightwatchjs.org)** environment for Vitest. Nightwatch.js is an integrated test framework for performing automated end-to-end testing on web applications and websites, across all major browsers.

```
npm install vitest-environment-nightwatch
```

## Usage:

Update your [Vitest configuration](https://vitest.dev/config/#configuration) in
`vitest.config.js`:

```js
{
  environment: "nightwatch",
  environmentOptions: {
    nightwatch: {
	    // Nightwatch related options (all optional)
	    headless: true,
	    browserName: 'chrome',
	    baseUrl: '',
	    verbose: false,
	    output: true,
	    env: null,
	    parallel: false,
	    devtools: false,
	    debug: false,
	    autoStartSession: true,
	    persistGlobals: true,
	    configFile: './nightwatch.conf.js',
	    globals: {},
	    webdriver: {},
	    timeout: null,
	    enableGlobalApis: false,
	    alwaysAsync: true,
	    desiredCapabilities: {},
	    async setup(browser) {},
	    async teardown(browser) {},
    }
  },
	...
}
```

### Types

Edit your `tsconfig.json` to include vitest-environment-nightwatch types for the
vitest config.

```json
{
  "compilerOptions": {
    "types": ["vitest-environment-nightwatch/types"]
  }
}
```

## Nightwatch options

| Name                                                                                            | Type     | Description                                                                                                                                                                                                                                             |         Default         |
| :---------------------------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------: |
| **`headless`**                                                                                  | Boolean  | Run Nightwatch in headless mode (available in Firefox, Chrome, Edge)                                                                                                                                                                                    |         `true`          |
| **`browserName`**                                                                               | String   | Browser name to use; available options are: `chrome`, `firefox`, `edge`, `safari`                                                                                                                                                                       |          none           |
| **`baseUrl`**                                                                                   | String   | The base url to use for the when using `.navigateTo()` with relative urls. When doing component testing it needs to be set to the url running the Vite dev server.                                                                                      | `http://localhost:3000` |
| **`verbose`**                                                                                   | Boolean  | Enable complete Nightwatch http logs.                                                                                                                                                                                                                   |         `false`         |
| **`output`**                                                                                    | Boolean  | Show Nightwatch output.                                                                                                                                                                                                                                 |         `true`          |
| **`env`**                                                                                       | String   | Nightwatch test environment to use, from `nightwatch.conf.js`. Learn more about test environments in the [Nightwatch docs](https://v2.nightwatchjs.org/guide/using-nightwatch/concepts.html#defining-test-environments).                                |          none           |
| **`parallel`**                                                                                  | Boolean  | Set this to true when running tests in parallel                                                                                                                                                                                                         |         `false`         |
| **`devtools`**                                                                                  | Boolean  | Chrome only: automatically open the chrome devtools                                                                                                                                                                                                     |         `false`         |
| **`debug`**                                                                                     | Boolean  | Component testing only: pause the test execution after rendering the component                                                                                                                                                                          |         `false`         |
| **`autoStartSession`**                                                                          | Boolean  | Start the Nightwatch session                                                                                                                                                                                                                            |
| automatically. If this is disabled, you'll need to call `client.launchBrowser()` in your tests. | `true`   |
| **`persistGlobals`**                                                                            | Boolean  | Persist the same globals object between runs or have a (deep) copy of it per each test. Learn more about test globals in the [Nightwatch docs](https://v2.nightwatchjs.org/guide/using-nightwatch/concepts.html#using-test-globals).                    |         `true`          |
| **`configFile`**                                                                                | String   | The Nightwatch config file to use. A config file will be auto-generated by default, but this allows you to change that. Learn more about the Nightwatch config in the [Nightwatch docs](https://v2.nightwatchjs.org/guide/configuration/overview.html). | `./nightwatch.conf.js`  |
| **`globals`**                                                                                   | Object   | A list of globals to be used in Nightwatch. Globals are available on `browser.globals`. Learn more about the Nightwatch test globals in the [Nightwatch docs](https://v2.nightwatchjs.org/guide/using-nightwatch/external-globals.html).                |          none           |
| **`webdriver`**                                                                                 | Object   | A list of Webdriver related settings to configure the Nightwatch Webdriver service. Learn more about the Nightwatch webdriver settings in the [Nightwatch docs](https://v2.nightwatchjs.org/guide/configuration/settings.html#webdriver-settings).      |          none           |
| **`timeout`**                                                                                   | Number   | Set the global timeout for assertion retries before an assertion fails.                                                                                                                                                                                 |         `5000`          |
| **`enableGlobalApis`**                                                                          | Boolean  | The Nightwatch global APIs ([element()](https://v2.nightwatchjs.org/api/element/), [expect()](https://v2.nightwatchjs.org/api/expect/)) are disable by default.                                                                                         |         `false`         |
| **`desiredCapabilities`**                                                                       | Object   | Define custom Selenium capabilities for the current session. Learn more about the specific browser driver that it is being used on the [Nightwatch docs](https://v2.nightwatchjs.org/guide/browser-drivers-setup/).                                     |          none           |
| **`setup()`**                                                                                   | Function | Additional setup hook to be executed after Nightwatch has been started.                                                                                                                                                                                 |          none           |
| **`teardown()`**                                                                                | Function | Additional teardown hook to be executed with the Nightwatch api object.                                                                                                                                                                                 |          none           |

## API

### `global.browser`

The Nightwatch [browser
API](https://v2.nightwatchjs.org/api/#the-browser-object) object. Created with
`global.client.launchBrowser`.

### `global.client`

The Vitest environment used the Nightwatch [programmatic
API](https://v2.nightwatchjs.org/api/programmatic/) to create the Nightwatch
instance and export the browser API.

Available properties/methods:

- `.element(<locator>)` - use the Nightwatch [.element() API](https://v2.nightwatchjs.org/api/element/) to locate elements in the page;
- `.updateCapabilities({ capabilities })` - used when `autoStartSession` is off in order to update the capabilities at run-time;
- `.launchBrowser()` - used when `autoStartSession` is off in order to start the session and open the browser;
- `.settings` - the Nightwatch settings object;
- `.nightwatch_client` - the Nightwatch (internal) instance.

## License

MIT

[version-badge]: https://img.shields.io/npm/v/vitest-environment-nightwatch.svg?style=flat-square
[package]: https://www.npmjs.com/package/vitest-environment-nightwatch
[license-badge]: https://img.shields.io/npm/l/vitest-environment-nightwatch.svg?style=flat-square
[license]: https://github.com/nightwatchjs/vitest-environment-nightwatch/blob/main/LICENSE
[discord-badge]: https://img.shields.io/discord/618399631038218240.svg?color=7389D8&labelColor=6A7EC2&logo=discord&logoColor=ffffff&style=flat-square
[discord]: https://discord.gg/SN8Da2X
