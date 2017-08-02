import { browser, by, element } from 'protractor';

export class FiveOClockPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('foc-root h1')).getText();
  }
}
