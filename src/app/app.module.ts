import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FooterComponent, NavbarComponent } from '@core'
import {
  BannerComponent,
  LogoComponent,
  SocialMediaIconComponent,
  TitleComponent,
} from '@shared'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe'

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    LogoComponent,
    NavbarComponent,
    SocialMediaIconComponent,
    TitleComponent,
    SanitizeHtmlPipe,
  ],
  imports: [AppRoutingModule, BrowserModule, TooltipModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SanitizeHtmlPipe]
})
export class AppModule {}
