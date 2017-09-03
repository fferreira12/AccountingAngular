import { Account } from '../account/account.model';
import { TransactionBalance } from "./transaction-balance.model";

export class TransactionUnit {
    public account: Account;
    public value: number;
    public balance: TransactionBalance;

    constructor(account: Account, value: number, balance: TransactionBalance) {
        this.account = account;
        this.value = value;
        this.balance = balance;
    }
}