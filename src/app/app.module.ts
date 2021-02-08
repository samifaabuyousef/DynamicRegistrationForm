import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { HttpClientModule } from '@angular/common/http';
import { PagecontentComponent } from './pagecontent/pagecontent.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationformComponent,
    PagecontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
