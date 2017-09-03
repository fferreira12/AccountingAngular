import { TransactionUnit } from "./transaction-unit.model";

export class Transaction {
    public date: Date;
    public transactionUnits: TransactionUnit[];
    public description: string;

    constructor(date: Date, transactionUnits: TransactionUnit[], description: string) {
        this.date = date;
        this.transactionUnits = transactionUnits;
        this.description = description;
    }
}