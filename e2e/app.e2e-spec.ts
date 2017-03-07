import { Angular2DiMiscPage } from './app.po';

describe('angular2-di-misc App', () => {
  let page: Angular2DiMiscPage;

  beforeEach(() => {
    page = new Angular2DiMiscPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
