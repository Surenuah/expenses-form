import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { TransactionInput } from '../inputs/transaction.input';
import { Transaction } from '../models/transaction.model';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Transaction[]> {
    return this.prisma.transaction.findMany();
  }

  async createTransaction(data: TransactionInput): Promise<Transaction> {
    return this.prisma.transaction.create({
      data: {
        dateTime: data.dateTime,
        author: data.author,
        sum: data.sum,
        category: data.category,
        comment: data.comment,
      },
    });
  }
}
