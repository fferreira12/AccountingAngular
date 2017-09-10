import { Component, OnInit } from '@angular/core';

import { Account } from '../account.model';
import { AccountType } from '../account-type.model';
import { AccountService } from "../account.service";

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  account: Account;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    if(this.accountService.selectedAccount != null) {
      this.account = this.accountService.selectedAccount;
    }
    this.accountService.onAccountSelected.subscribe((account) => {
      this.account = account;
    });
  }

}
