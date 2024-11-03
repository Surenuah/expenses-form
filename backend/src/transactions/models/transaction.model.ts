import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Transaction {
  @Field(() => Int)
  id: number;

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
