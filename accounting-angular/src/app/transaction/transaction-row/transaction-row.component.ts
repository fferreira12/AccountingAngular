import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from "../transaction.model";

@Component({
  selector: 'app-transaction-row',
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.css']
})
export class TransactionRowComponent implements OnInit {

  @Input()
  transaction: Transaction;

  constructor() { }

  ngOnInit() {
  }

}
