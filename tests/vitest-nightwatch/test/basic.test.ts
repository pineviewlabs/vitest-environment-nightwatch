import { assert, describe, it, expect } from 'vitest'
// const NodeEnvironment = require('jest-environment-node');
// const NightwatchEnvironment = require('../index.js');
// const Nightwatch = require('nightwatch');
// const NightwatchClient = require('nightwatch/lib/core/client.js');

describe('NightwatchEnvironment Unit Tests', function() {
  it('environemnt should make client and browser', async function() {
    expect(client).toBeDefined()
    expect(browser).toBeDefined()
  });

  /* it('test with setup and auto_start off', async function() {
    const instance = new NightwatchEnvironment({
      testEnvironmentOptions: {
        autoStartSession: false
      }
    });

    await instance.setup();
    assert.strictEqual(instance.global.browser, undefined);
    assert.ok(instance.global.jestNightwatch);
    assert.strictEqual(typeof instance.global.jestNightwatch.launchBrowser, 'function');
  }); */
/*
  it('test with baseUrl property', async function() {
    const instance = new NightwatchEnvironment({
      testEnvironmentOptions: {
        baseUrl: 'http://localhost'
      }
    });

    instance.client.launchBrowser = function() {
      return Promise.resolve({value: true});
    };

    await instance.setup();
    assert.strictEqual(instance.global.baseUrl, 'http://localhost');
  });

  it('test with setup option', function(done) {
    const instance = new NightwatchEnvironment({
      testEnvironmentOptions: {
        async setup(browser) {
          assert.deepStrictEqual(browser, {value: true});

          done();
        }
      }
    });

    instance.client.launchBrowser = function() {
      return Promise.resolve({value: true});
    };

    instance.setup().then(function() {

    }).catch(err => done(err));
  });

  it('test with teardown option', function(done) {
    const instance = new NightwatchEnvironment({
      testEnvironmentOptions: {
        async teardown(browser) {
          assert.deepStrictEqual(browser, {value: true});

          done();
        }
      }
    });

    instance.client.launchBrowser = function() {
      return Promise.resolve({value: true});
    };

    instance.setup().then(function() {
      return instance.teardown();
    }).catch(err => done(err));
  }); */
});

