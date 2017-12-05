import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
  ],
  declarations: [AppComponent],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
