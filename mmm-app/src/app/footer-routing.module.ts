import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTestimonialsComponent } from './Pages/All-Testimonials/all-testimonials.component';
import { SitemapComponent } from './Pages/Sitemap/sitemap.component';
import { PressRoomComponent } from './Pages/Press-Room/press-room.component';
import { AboutUsComponent } from './Pages/About-Us/about-us.component';
import { CareersComponent } from './Pages/Careers/careers.component';
import { MeetTheTeamComponent } from './Pages/Meet-The-Team/meet-the-team.component';
import { AdvisoryGroupComponent } from './Pages/Advisory-Group/advisory-group.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { OurPartnersComponent } from './Pages/Our-Partners/our-partners.component';
import { IfscCodeComponent } from './Pages/IFSC-Code/ifsc-code.component';
import { PrivacyPolicyComponent } from './Pages/privacy-policy/privacy-policy.component';

const footerroutes: Routes = [
  { path: 'all-testimonials', component: AllTestimonialsComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: 'press-room', component: PressRoomComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'meet-the-team', component: MeetTheTeamComponent }, 
  { path: 'advisory-group', component: AdvisoryGroupComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'our-partners', component: OurPartnersComponent }, 
  { path: 'ifsc-code', component: IfscCodeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(footerroutes)
  ]
})
export class FooterRoutingModule { }
