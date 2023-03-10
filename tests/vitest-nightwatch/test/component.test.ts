import { describe, it, expect } from 'vitest'
describe('Render Vue Component test', function() {
  it('checks the vue component', async function() {
    const formComponent = await browser.mountComponent('/src/components/Form.vue', '');

    browser.expect.element(formComponent).to.be.present;
    browser.setValue('#movie-input', 'A Serious Man');

    const inputEl = formComponent.find('input[type="radio"][value="3"]');

    browser.expect.element(inputEl).to.be.present;

    browser.click(inputEl);

    browser.expect.element(formComponent.property('rating')).to.equal('3');
    browser.expect.element(formComponent.property('title')).to.be.a('string').and.equal('A Serious Man');
  }, 10000);
});
