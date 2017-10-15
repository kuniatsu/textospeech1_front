import { Textospeech1Page } from './app.po';

describe('textospeech1 App', () => {
  let page: Textospeech1Page;

  beforeEach(() => {
    page = new Textospeech1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
