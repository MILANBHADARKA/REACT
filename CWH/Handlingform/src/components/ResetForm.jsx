import { useForm } from "react-hook-form";

const ResetFormExample = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => console.log("Submitted Data:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Enter Name" />
      <input {...register("email")} placeholder="Enter Email" />

      <button type="submit">Submit</button>
      <button type="button" onClick={() => reset()}>Reset</button>
    </form>
  );
};

export default ResetFormExample;
