import { useForm } from "react-hook-form";

const TriggerValidationExample = () => {
  const { register, handleSubmit, trigger, formState: { errors } } = useForm();
  //trigger is used to trigger validation manually means when we click on button then it will validate the input field and show the error message if it is not valid.

  const onSubmit = (data) => console.log("Submitted Data:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: "Email is required" })} placeholder="Enter Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="button" onClick={() => trigger("email")}>Validate Email</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TriggerValidationExample;
