import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SocialMediaIconComponent } from '@shared'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    SocialMediaIconComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, TooltipModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
