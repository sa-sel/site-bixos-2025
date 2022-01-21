import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import {HttpClientModule} from '@angular/common/http'

import { TitleComponent } from '@shared'
import { ImageGridComponent } from '@shared'
import { ImageTestService } from '@services'

@NgModule({
  declarations: [AppComponent, TitleComponent, ImageGridComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
