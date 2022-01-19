import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SocialMediaIconComponent, TitleComponent } from '@shared'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent, SocialMediaIconComponent, TitleComponent],
  imports: [AppRoutingModule, BrowserModule, TooltipModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
