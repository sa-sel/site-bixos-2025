import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FooterComponent, NavbarComponent } from '@core'
import {
  BannerComponent,
  ImageGridComponent,
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
    AppComponent,
    BannerComponent,
    FooterComponent,
    ImageGridComponent,
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
