import { AccountingAngularPage } from './app.po';

describe('accounting-angular App', () => {
  let page: AccountingAngularPage;

  beforeEach(() => {
    page = new AccountingAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
