import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgcCookieConsentModule } from 'ngx-cookieconsent';
import { cookieConfig } from './app-cookie-config';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { declarations } from './app-declarations';
import { DisqusModule } from 'ngx-disqus';

@NgModule({
  declarations: declarations,
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    HighlightModule,
    DisqusModule.forRoot('disqus_shortname')
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
