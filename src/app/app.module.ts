import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FooterComponent, NavbarComponent } from '@core'
import { LogoComponent, SocialMediaIconComponent, TitleComponent } from '@shared'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LogoComponent,
    NavbarComponent,
    SocialMediaIconComponent,
    TitleComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, TooltipModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
