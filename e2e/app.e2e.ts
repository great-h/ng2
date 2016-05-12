import { GreatHPage } from './app.po';

describe('great-h App', function() {
  let page: GreatHPage;

  beforeEach(() => {
    page = new GreatHPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('great-h works!');
  });
});
