import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TransactionInput {
  @Field()
  dateTime: Date;

  @Field()
  author: string;

  @Field()
  sum: number;

  @Field()
  category: string;

  @Field({ nullable: true })
  comment?: string;
}
