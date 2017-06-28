import { EucomPage } from './app.po';

describe('eucom App', () => {
  let page: EucomPage;

  beforeEach(() => {
    page = new EucomPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
