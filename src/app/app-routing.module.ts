import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { HowToTrainYourDragonComponent } from './components/blog/post/pages/how-to-train-your-dragon/how-to-train-your-dragon.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog/posts/how-to-train-your-dragon',
    component: HowToTrainYourDragonComponent,
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
