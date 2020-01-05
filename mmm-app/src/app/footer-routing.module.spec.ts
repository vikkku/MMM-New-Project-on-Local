import { FooterRoutingModule } from './footer-routing.module';

describe('FooterRoutingModule', () => {
  let footerRoutingModule: FooterRoutingModule;

  beforeEach(() => {
    footerRoutingModule = new FooterRoutingModule();
  });

  it('should create an instance', () => {
    expect(footerRoutingModule).toBeTruthy();
  });
});
