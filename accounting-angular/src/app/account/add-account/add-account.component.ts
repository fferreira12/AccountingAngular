import { Component, OnInit } from '@angular/core';
import { AccountService } from "../account.service";
import { AccountType } from "../account-type.model";
import { Account } from '../account.model';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  public newAccount: Account;

  constructor(public accountService: AccountService) { }

  ngOnInit() {
  }

  onAddAccount(form: NgForm) {
    //console.log(form);
    this.newAccount = new Account(form.value.accname, form.value.accdesc, AccountType[<string>form.value.acctype]);
    //console.log(this.newAccount);
    this.accountService.addAccount(this.newAccount);
  }

}
