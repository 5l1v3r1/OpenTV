import { OpenTVPage } from './app.po';

describe('open-tv App', () => {
  let page: OpenTVPage;

  beforeEach(() => {
    page = new OpenTVPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
