import { Injectable, OnInit } from '@angular/core';

import { Transaction } from './transaction.model';
import { TransactionUnit } from './transaction-unit.model';
import { BalanceType } from '../balance-type.model';
import { Account } from '../account/account.model';
import { AccountType } from '../account/account-type.model';
import { AccountService } from "../account/account.service";

@Injectable()
export class TransactionService implements OnInit {

    public transactionsList: Transaction[] = new Array<Transaction>();

    constructor(public accountService: AccountService) {

    }

    ngOnInit(): void {
        console.log("inside Transaction Service OnInit");
        this.initializeTestTransactions(10);
    }

    addTransaction(transaction: Transaction) {
        this.transactionsList.push(transaction);
    }

    initializeTestTransactions(quantity: number) {
        console.log("inside initializeTestTransactions");
        for (var i = 0; i < quantity; i++) {
            this.addTransaction(
                new Transaction(
                    new Date(2017, 11, 1),
                    [
                        new TransactionUnit(this.accountService.accountsList[0], 50, BalanceType.Credit),
                        new TransactionUnit(this.accountService.accountsList[1], 50, BalanceType.Debit)
                    ],
                    "Transaction " + (i + 1)
                )
            )
        };
    }

    getTransactions(): Transaction[] {
        if(this.transactionsList.length == 0) {
            this.initializeTestTransactions(10);
        }
        return this.transactionsList;
    }

}