import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

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

  @Output() onAccountClicked: EventEmitter<Account> = new EventEmitter();

  public accountType: string;

  constructor() { }

  ngOnInit() {
    this.accountType = AccountType[this.account.accountType];
    
  }

  onClicked() {
    this.onAccountClicked.emit(this.account);
  }

}
