import { ImperialPage } from './app.po';

describe('imperial App', () => {
  let page: ImperialPage;

  beforeEach(() => {
    page = new ImperialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
