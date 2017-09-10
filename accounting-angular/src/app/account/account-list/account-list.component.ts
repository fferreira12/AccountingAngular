import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

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
  
  constructor(public accountService: AccountService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onAccountClicked(acc: Account) {
    //console.log(acc);
    this.accountService.selectAccount(acc);
    this.router.navigate(['detail'], { relativeTo: this.route });
  }

}
