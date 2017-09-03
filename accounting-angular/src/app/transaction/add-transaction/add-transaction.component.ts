import { Component, OnInit } from '@angular/core';
import { AccountService } from "../../account/account.service";
import { NgForm } from "@angular/forms/";

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  constructor(public accountService: AccountService) { }

  ngOnInit() {
  }

  onAddTransaction(form: NgForm) {
    console.log(form);
  }

}
