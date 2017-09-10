import { Component, OnInit } from '@angular/core';

import { Account } from '../account.model';
import { AccountType } from '../account-type.model';
import { AccountService } from "../account.service";


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  //dummy data
  
  constructor(public accountService: AccountService) { }

  ngOnInit() {
  }

  onAccountClicked(acc: Account) {
    //console.log(acc);
    this.accountService.selectAccount(acc);
  }

}
