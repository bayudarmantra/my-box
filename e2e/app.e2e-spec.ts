import { MyBoxPage } from './app.po';

describe('my-box App', function() {
  let page: MyBoxPage;

  beforeEach(() => {
    page = new MyBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
