import { FiveOClockPage } from './app.po';

describe('five-o-clock App', () => {
  let page: FiveOClockPage;

  beforeEach(() => {
    page = new FiveOClockPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to foc!');
  });
});
