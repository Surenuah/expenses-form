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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto p-6 bg-white shadow-md rounded-lg w-[400px]"
    >
      <h2 className="text-2xl font-semibold mb-4 text-black">
        Create Transaction
      </h2>

      <div className="mb-4">
        <label htmlFor="dateTime" className="block text-gray-700">
          Date and Time
        </label>
        <input
          type="datetime-local"
          {...register("dateTime", { required: "Date and time are required" })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.dateTime && (
          <span className="text-red-600">{errors.dateTime.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="author" className="block text-gray-700">
          Author
        </label>
        <input
          type="text"
          {...register("author", { required: "Author is required" })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.author && (
          <span className="text-red-600">{errors.author.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="sum" className="block text-gray-700">
          Sum
        </label>
        <input
          type="number"
          step="0.01"
          {...register("sum", { required: "Sum is required", min: 0 })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.sum && (
          <span className="text-red-600">{errors.sum.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700">
          Category
        </label>
        <input
          type="text"
          {...register("category", { required: "Category is required" })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.category && (
          <span className="text-red-600">{errors.category.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="comment" className="block text-gray-700">
          Comment (optional)
        </label>
        <input
          type="text"
          {...register("comment")}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </form>
  );
};
