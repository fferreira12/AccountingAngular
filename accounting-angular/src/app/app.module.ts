import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTransactionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
