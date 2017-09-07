import { Injectable, OnInit } from '@angular/core';

import { Transaction } from './transaction.model';
import { TransactionUnit } from './transaction-unit.model';
import { BalanceType } from '../balance-type.model';
import { Account } from '../account/account.model';
import { AccountType } from '../account/account-type.model';
import { AccountService } from "../account/account.service";

@Injectable()
export class TransactionService implements OnInit {

    public transactionsList: Transaction[] = [
        new Transaction(
            new Date("28/02/2017"),
            [
                new TransactionUnit(this.accountService.accountsList[0], 50, BalanceType.Credit),
                new TransactionUnit(this.accountService.accountsList[0], 50, BalanceType.Debit)
            ],
            "transaction 1"
        )
    ];
    
    constructor(public accountService: AccountService) {

    }

    ngOnInit(): void {
        let acc1 = this.accountService.accountsList[0];
        let acc2 = this.accountService.accountsList[1];

        let tu1 = new TransactionUnit(acc1, 50, BalanceType.Credit);
        let tu2 = new TransactionUnit(acc2, 50, BalanceType.Debit);

        let trans = new Transaction(new Date("28/02/2017"), [tu1, tu2], "transaction 1");

        this.addTransaction(trans);
        this.addTransaction(trans);
        this.addTransaction(trans);
        this.addTransaction(trans);
        this.addTransaction(trans);
        this.addTransaction(trans);
        this.addTransaction(trans);
    }

    addTransaction(transaction: Transaction) {
        this.transactionsList.push(transaction);
    }

}