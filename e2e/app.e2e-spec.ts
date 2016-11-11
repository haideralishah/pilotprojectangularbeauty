import { AngularBeautyPage } from './app.po';

describe('angular-beauty App', function() {
  let page: AngularBeautyPage;

  beforeEach(() => {
    page = new AngularBeautyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
