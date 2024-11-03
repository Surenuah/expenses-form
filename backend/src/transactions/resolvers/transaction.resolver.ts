import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Transaction } from '../models/transaction.model';
import { TransactionService } from '../services/transaction.service';
import { TransactionInput } from '../inputs/transaction.input';

@Resolver(() => Transaction)
export class TransactionResolver {
  constructor(private transactionService: TransactionService) {}

  @Query(() => [Transaction])
  async transactions() {
    return this.transactionService.findAll();
  }

  @Mutation(() => Transaction, { name: 'createTransaction' })
  async createTransaction(@Args('data') transactionInput: TransactionInput) {
    return this.transactionService.createTransaction(transactionInput);
  }
}
