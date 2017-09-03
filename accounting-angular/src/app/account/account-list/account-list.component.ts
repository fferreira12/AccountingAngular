import { Component, OnInit } from '@angular/core';

import { Account } from '../account.model';
import { AccountType } from '../account-type.model';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  //dummy data
  public accountsList: Account[] = [
    new Account("non alocated", "money not associated with other accounts", AccountType.Asset),
    new Account("gasoline reserve", "gasoline reserve", AccountType.Asset),
    new Account("food reserve", "food reserve", AccountType.Asset),
    new Account("bills reserve", "bills reserve", AccountType.Asset),
    new Account("trip reserve", "trip reserve", AccountType.Asset),
    new Account("wallet reserve", "wallet reserve", AccountType.Asset),
    new Account("contingency reserve", "contingency reserve", AccountType.Asset)
  ];

  constructor() { }

  ngOnInit() {
  }

}
