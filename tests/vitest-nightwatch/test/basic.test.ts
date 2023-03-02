import { describe, it, expect } from 'vitest'

describe('NightwatchEnvironment Unit Tests', function() {
  it('environemnt should make client and browser', async function() {
    expect(client).toBeDefined()
    expect(browser).toBeDefined()
  });
});

