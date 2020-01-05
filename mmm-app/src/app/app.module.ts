import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Share/header/header.component';
import { FooterComponent } from './Share/footer/footer.component';
import { HomeBannerComponent } from './Components/home-banner/home-banner.component';
import { ProductsSliderComponent } from './Components/products-slider/products-slider.component';
import { HomePeraLinksComponent } from './Components/home-pera-links/home-pera-links.component';
import { LoanDistributionComponent } from './Components/loan-distribution/loan-distribution.component';
import { FinancePartnersComponent } from './Components/finance-partners/finance-partners.component';
import { AboutMmmComponent } from './Components/about-mmm/about-mmm.component';
import { HomeBlogSliderComponent } from './Components/home-blog-slider/home-blog-slider.component';

import { ContactComponent } from './Pages/contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';
import { from } from 'rxjs';
import { HomeComponent } from './Pages/home/home.component';
import { CreditCardComponent } from './Pages/credit-card/credit-card.component';
import { HealthInsuranceComponent } from './Pages/health-insurance/health-insurance.component';
import { LifeInsuranceComponent } from './Pages/life-insurance/life-insurance.component';

import { AllTestimonialsComponent } from './Pages/All-Testimonials/all-testimonials.component';
import { SitemapComponent } from './Pages/Sitemap/sitemap.component';
import { PressRoomComponent } from './Pages/Press-Room/press-room.component';
import { AboutUsComponent } from './Pages/About-Us/about-us.component';
import { CareersComponent } from './Pages/Careers/careers.component';
import { MeetTheTeamComponent } from './Pages/Meet-The-Team/meet-the-team.component';
import { AdvisoryGroupComponent } from './Pages/Advisory-Group/advisory-group.component';
import { OurPartnersComponent } from './Pages/Our-Partners/our-partners.component';
import { IfscCodeComponent } from './Pages/IFSC-Code/ifsc-code.component';
import { PrivacyPolicyComponent } from './Pages/privacy-policy/privacy-policy.component';

import { HomeLoanComponent } from './Pages/home-loan/home-loan.component';
import { LoanAgainstPropertyComponent } from './Pages/loan-against-property/loan-against-property.component';
import { HomeLoanBalanceTransferComponent } from './Pages/H-L-B-T/home-loan-balance-transfer.component';
import { PersonalLoanComponent } from './Pages/personal-loan/personal-loan.component';
import { BusinessLoanComponent } from './Pages/business-loan/business-loan.component';
import { GoldLoanComponent } from './Pages/gold-loan/gold-loan.component';
import { HdfcLtdComponent } from './Pages/Home-Loan/hdfc-ltd.component';
import { DhflComponent } from './Pages/Home-Loan/dhfl.component';
import { IciciBankComponent } from './Pages/Home-Loan/icici-bank.component';
import { PnbHousingComponent } from './Pages/Home-Loan/pnb-housing.component';
import { AxisBankComponent } from './Pages/Home-Loan/axis-bank.component';
import { SbiBankComponent } from './Pages/Home-Loan/sbi-bank.component';
import { CitibankComponent } from './Pages/Home-Loan/citibank.component';
import { TataCapitalComponent } from './Pages/Home-Loan/tata-capital.component';
import { BajajFinservComponent } from './Pages/Personal-Loan/bajaj-finserv.component';
import { YesBankComponent } from './Pages/Personal-Loan/yes-bank.component';
import { HdfcBankComponent } from './Pages/Personal-Loan/hdfc-bank.component';
import { KotakMahindraBankComponent } from './Pages/Personal-Loan/kotak-mahindra-bank.component';
import { FullertonIndiaComponent } from './Pages/Business-Loan/fullerton-india.component';
import { IdfcFirstComponent } from './Pages/Business-Loan/idfc-first.component';
import { FooterRoutingModule } from './/footer-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeBannerComponent,
    ProductsSliderComponent,
    HomePeraLinksComponent,
    LoanDistributionComponent,
    FinancePartnersComponent,
    HomeComponent,
    ContactComponent,
    CreditCardComponent,
    HealthInsuranceComponent,
    LifeInsuranceComponent,
    AboutMmmComponent,
    HomeBlogSliderComponent,    
    HomeLoanComponent,
    LoanAgainstPropertyComponent,
    HomeLoanBalanceTransferComponent,
    PersonalLoanComponent,
    BusinessLoanComponent,
    GoldLoanComponent,
    HdfcLtdComponent,
    DhflComponent,
    IciciBankComponent,
    PnbHousingComponent,
    AxisBankComponent,
    SbiBankComponent,
    CitibankComponent,
    TataCapitalComponent,
    BajajFinservComponent,
    YesBankComponent,
    HdfcBankComponent,
    KotakMahindraBankComponent,
    FullertonIndiaComponent,
    IdfcFirstComponent,
    IfscCodeComponent,
    OurPartnersComponent,
    AdvisoryGroupComponent,
    MeetTheTeamComponent,
    CareersComponent,
    AboutUsComponent,
    PressRoomComponent,
    SitemapComponent,
    AllTestimonialsComponent,
    PrivacyPolicyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    OwlModule,
    FooterRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
