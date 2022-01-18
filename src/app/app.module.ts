import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FooterComponent, NavbarComponent } from '@core'
import { BannerComponent, LogoComponent, SocialMediaIconComponent } from '@shared'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    LogoComponent,
    NavbarComponent,
    SocialMediaIconComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, TooltipModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
