import { Injectable, Output, EventEmitter } from '@angular/core';

import { Account } from './account.model';
import { AccountType } from './account-type.model';

@Injectable()
export class AccountService {

    public selectedAccount: Account;

    @Output()
    public onAccountSelected: EventEmitter<Account> = new EventEmitter();

    public accountsList: Account[] = [
        new Account("Non alocated", "money not associated with other accounts", AccountType.Asset),
        new Account("Gasoline reserve", "reserve for gasoline expense", AccountType.Expense),
        new Account("Food reserve", "reserve for food", AccountType.Liability),
        new Account("Bills reserve", "reserve for paying my bills", AccountType.Revenue),
        new Account("Trip reserve", "reserbe for money to be spent on trips", AccountType.Asset),
        new Account("Wallet reserve", "reserve for money that will be withdrawed", AccountType.Expense),
        new Account("Contingency reserve", "reserve for any kind of emergency", AccountType.Liability)
    ];

    addAccount(account: Account) {
        this.accountsList.push(account);
    }

    selectAccount(account: Account) {
        this.selectedAccount = account;
        this.onAccountSelected.emit(account);
    }

}