import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

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
import { TransactionService } from "./transaction/transaction.service";
import { TransactionRowComponent } from './transaction/transaction-row/transaction-row.component';

const appRoutes: Routes = [
  { path: 'account', component: AccountGroupComponent },
  { path: 'transaction', component: TransactionGroupComponent },
  { 
    path: '',
    redirectTo: '/account',
    pathMatch: 'full'
  },
];

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
    AccountRowComponent,
    TransactionRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AccountService, TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
