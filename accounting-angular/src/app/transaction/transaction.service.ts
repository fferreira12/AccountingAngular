import { Injectable } from '@angular/core';

import { Transaction } from './transaction.model';
import { TransactionUnit } from './transaction-unit.model';
import { TransactionBalance } from './transaction-balance.model';
import { Account } from '../account/account.model';
import { AccountType } from '../account/account-type.model';

@Injectable()
export class TransactionService {

    public transactionsList: Transaction[] = [
        new Transaction(
            new Date(2017, 09, 3), 
            [
                new TransactionUnit(new Account("Debited Account", "Debited Account description", AccountType.Expense), 150, TransactionBalance.Debit),
                new TransactionUnit(new Account("Credited Account", "Credited Account description", AccountType.Asset), 150, TransactionBalance.Credit)
            ], 
            "Transaction description")
    ];

    addTransaction(transaction: Transaction) {
        this.transactionsList.push(transaction);
    }

}