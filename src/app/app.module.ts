import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from '@core'
import { SocialMediaIconComponent } from '@shared'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialMediaIconComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, TooltipModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
