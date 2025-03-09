import { useForm } from "react-hook-form";

const SetValueExample = () => {
  const { register, setValue, handleSubmit } = useForm();

  const onSubmit = (data) => console.log("Submitted Data:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Enter Name" />
      
      <button type="button" onClick={() => setValue("name", "Milan Bhadarka")}>
        Set Name to "Milan Bhadarka"
      </button>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SetValueExample;
