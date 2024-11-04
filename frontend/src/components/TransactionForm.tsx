import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "react-query";

type TransactionFormValues = {
  dateTime: string;
  author: string;
  sum: number;
  category: string;
  comment?: string;
};

export const TransactionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TransactionFormValues>();

  const { mutate: createTransaction } = useMutation(
    (data: TransactionFormValues) =>
      axios.post("http://localhost:3000/graphql", {
        query: `
          mutation CreateTransaction($data: TransactionInput!) {
            createTransaction(data: $data) {
              id
              dateTime
              author
              sum
              category
              comment
            }
          }
        `,
        variables: {
          data,
        },
      }),
  );

  const onSubmit: SubmitHandler<TransactionFormValues> = (data) => {
    createTransaction(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="dateTime">Date and Time</label>
        <input
          type="datetime-local"
          {...register("dateTime", {
            required: "Date and time are required",
          })}
        />
        {errors.dateTime && <span>{errors.dateTime.message}</span>}
      </div>

      <div>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          {...register("author", { required: "Author is required" })}
        />
        {errors.author && <span>{errors.author.message}</span>}
      </div>

      <div>
        <label htmlFor="sum">Sum</label>
        <input
          type="number"
          step="0.01"
          {...register("sum", { required: "Sum is required", min: 0 })}
        />
        {errors.sum && <span>{errors.sum.message}</span>}
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          {...register("category", { required: "Category is required" })}
        />
        {errors.category && <span>{errors.category.message}</span>}
      </div>

      <div>
        <label htmlFor="comment">Comment (optional)</label>
        <input type="text" {...register("comment")} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
