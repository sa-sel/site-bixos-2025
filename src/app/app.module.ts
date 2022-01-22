import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FooterComponent, NavbarComponent } from '@core'
import {
  AlternatingLayoutComponent,
  BannerComponent,
  LogoComponent,
  SocialMediaIconComponent,
  TitleComponent,
} from '@shared'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SanitizeHtmlPipe } from '@pipes'

@NgModule({
  declarations: [
    AlternatingLayoutComponent,
    AppComponent,
    FooterComponent,
    BannerComponent,
    LogoComponent,
    NavbarComponent,
    SocialMediaIconComponent,
    TitleComponent,
    SanitizeHtmlPipe,
  ],
  imports: [AppRoutingModule, BrowserModule, TooltipModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
