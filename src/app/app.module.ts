import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponentsModule } from "./components/app-components.module";
import { AppRoutesModule } from "./routes/app-routes.module";
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutesModule,
    AppComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
