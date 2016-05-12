export class GreatHPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('great-h-app h1')).getText();
  }
}
