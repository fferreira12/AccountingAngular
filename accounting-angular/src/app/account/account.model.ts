import { AccountType } from './account-type.model';

export class Account {
    public name: string;
    public description: string;
    public value: number;
    public accountType: AccountType;

    constructor(name: string, description: string, accountType: AccountType) {
        this.name = name;
        this.description = description;
        this.value = 0;
        this.accountType = accountType;
    }
}