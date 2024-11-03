import { Transaction } from '../models/transaction.model';
import { TransactionService } from '../services/transaction.service';
import { TransactionInput } from '../inputs/transaction.input';
export declare class TransactionResolver {
    private transactionService;
    constructor(transactionService: TransactionService);
    transactions(): Promise<Transaction[]>;
    createTransaction(transactionInput: TransactionInput): Promise<Transaction>;
}
