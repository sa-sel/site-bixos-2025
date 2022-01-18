import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent, NavbarComponent } from '@core'
import { LogoComponent, SocialMediaIconComponent } from '@shared'
import { TooltipModule } from 'ngx-bootstrap/tooltip'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LogoComponent,
    NavbarComponent,
    SocialMediaIconComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, TooltipModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
