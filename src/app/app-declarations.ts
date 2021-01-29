import { AppComponent } from "./app.component";
import { BlogComponent } from "./components/blog/blog.component";
import { HowToTrainYourDragonComponent } from "./components/blog/post/pages/how-to-train-your-dragon/how-to-train-your-dragon.component";
import { LearnHowToBeABeeComponent } from "./components/blog/post/pages/learn-how-to-be-a-bee/learn-how-to-be-a-bee.component";
import { PostFooterComponent } from "./components/blog/post/shared/post-footer/post-footer.component";
import { PostHeaderComponent } from "./components/blog/post/shared/post-header/post-header.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { ContactMeComponent } from "./components/contact-me/contact-me.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { TilesComponent } from "./components/homepage/tiles/tiles.component";
import { PrivacyPolicyComponent } from "./components/privacy-policy/privacy-policy.component";
import { FooterComponent } from "./shared/layout/footer/footer.component";
import { NavbarComponent } from "./shared/layout/navbar/navbar.component";

export const declarations = [
    AppComponent,
    NavbarComponent,
    ContactFormComponent,
    HomepageComponent,
    PrivacyPolicyComponent,
    ContactMeComponent,
    TilesComponent,
    FooterComponent,
    // blog related
    BlogComponent,
    PostHeaderComponent,
    PostFooterComponent,
    // posts
    HowToTrainYourDragonComponent,
    LearnHowToBeABeeComponent
]