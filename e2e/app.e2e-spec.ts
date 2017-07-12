import { FirstngPage } from './app.po';

describe('firstng App', () => {
  let page: FirstngPage;

  beforeEach(() => {
    page = new FirstngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
