import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'contact-me',
    component: ContactMeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
