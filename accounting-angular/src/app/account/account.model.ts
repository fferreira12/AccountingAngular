import { AccountType } from './account-type.model';

export class Account {
    public id: number;
    public name: string;
    public description: string;
    public value: number;
    public accountType: AccountType;

    constructor(name: string, description: string, accountType: AccountType) {
        //this.id = Math.floor(Math.random() * 10000000);
        this.name = name;
        this.description = description;
        this.value = 0;
        this.accountType = accountType;
    }

    getAccTypeStr(): string {
        return AccountType[this.accountType];
    }

    setAccTypeStr(value: string) {
        this.accountType = AccountType[value];
    }
}