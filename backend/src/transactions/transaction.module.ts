import { Module } from '@nestjs/common';
import { TransactionResolver } from './resolvers/transaction.resolver';
import { TransactionService } from './services/transaction.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [TransactionResolver, TransactionService, PrismaService],
})
export class TransactionsModule {}
