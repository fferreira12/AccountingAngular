import { Component, OnInit } from '@angular/core';
import { AccountService } from "../account.service";

@Component({
  selector: 'app-account-group',
  templateUrl: './account-group.component.html',  
  styleUrls: ['./account-group.component.css']
})
export class AccountGroupComponent implements OnInit {

  accountSelected: Account;

  constructor(public accountService: AccountService) { }

  ngOnInit() {
    this.accountService.onAccountSelected.subscribe((account) => {
      this.accountSelected = account;
      console.log("account selected on account group component");
      console.log(this.accountSelected);
    });
  }

  // onSelecAccount(account: Account) {
  //   this.accountSelected = account;
  // }

}
