import { Account } from '../account/account.model';
import { BalanceType } from "../balance-type.model";

export class TransactionUnit {
    public account: Account;
    public balance: BalanceType;
    public value: number;

    constructor(account: Account, value: number, balance: BalanceType) {
        this.account = account;
        this.value = value;
        this.balance = balance;
    }
}