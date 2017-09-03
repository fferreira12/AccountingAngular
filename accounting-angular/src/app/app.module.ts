import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTransactionComponent } from './transaction/add-transaction/add-transaction.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddAccountComponent } from './account/add-account/add-account.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import { AccountGroupComponent } from './account/account-group/account-group.component';
import { TransactionGroupComponent } from './transaction/transaction-group/transaction-group.component';
import { AccountRowComponent } from './account/account-row/account-row.component';
import { AccountService } from "./account/account.service";

@NgModule({
  declarations: [
    AppComponent,
    AddTransactionComponent,
    NavBarComponent,
    AddAccountComponent,
    AccountListComponent,
    TransactionListComponent,
    AccountGroupComponent,
    TransactionGroupComponent,
    AccountRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
