import { Component, OnInit } from '@angular/core';

import { TransactionService } from '../transaction.service';
import { Transaction } from "../transaction.model";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transacs: Transaction[];

  constructor(public transactionService: TransactionService) { }

  ngOnInit() {
    this.transacs = this.transactionService.transactionsList;
  }

}
