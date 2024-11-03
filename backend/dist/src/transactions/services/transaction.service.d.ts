import { PrismaService } from '../../../prisma/prisma.service';
import { TransactionInput } from '../inputs/transaction.input';
import { Transaction } from '../models/transaction.model';
export declare class TransactionService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Transaction[]>;
    createTransaction(data: TransactionInput): Promise<Transaction>;
}
