import { Angular2RxjsFunPage } from './app.po';

describe('angular2-material App', function() {
  let page: Angular2RxjsFunPage;

  beforeEach(() => {
    page = new Angular2RxjsFunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
