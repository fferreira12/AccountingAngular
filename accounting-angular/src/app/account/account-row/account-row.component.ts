import { Component, OnInit, Input  } from '@angular/core';

import { Account } from '../account.model';
import { AccountType } from '../account-type.model';

@Component({
  selector: 'app-account-row',
  templateUrl: './account-row.component.html',
  styleUrls: ['./account-row.component.css']
})
export class AccountRowComponent implements OnInit {

  @Input()
  public account: Account;

  public accountType: string;

  constructor() { }

  ngOnInit() {
    this.accountType = AccountType[this.account.accountType];
  }

}
