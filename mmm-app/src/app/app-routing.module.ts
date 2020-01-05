import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CreditCardComponent } from './Pages/credit-card/credit-card.component';
import { HealthInsuranceComponent } from './Pages/health-insurance/health-insurance.component';
import { LifeInsuranceComponent } from './Pages/life-insurance/life-insurance.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeLoanComponent } from './Pages/home-loan/home-loan.component';
import { LoanAgainstPropertyComponent } from './Pages/loan-against-property/loan-against-property.component';
import { HomeLoanBalanceTransferComponent } from './Pages/H-L-B-T/home-loan-balance-transfer.component';
import { PersonalLoanComponent } from './Pages/personal-loan/personal-loan.component';
import { BusinessLoanComponent } from './Pages/business-loan/business-loan.component';
import { GoldLoanComponent } from './Pages/gold-loan/gold-loan.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home-loan', component: HomeLoanComponent },
  { path: 'loan-against-property', component: LoanAgainstPropertyComponent }, 
  { path: 'home-loan-balance-transfer', component: HomeLoanBalanceTransferComponent },
  { path: 'personal-loan', component: PersonalLoanComponent },
  { path: 'business-loan', component: BusinessLoanComponent },
  { path: 'gold-loan', component: GoldLoanComponent },
  { path: 'credit-card', component: CreditCardComponent },
  { path: 'health-insurance', component: HealthInsuranceComponent },
  { path: 'life-insurance', component: LifeInsuranceComponent },
  { path: 'contact', component: ContactComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
