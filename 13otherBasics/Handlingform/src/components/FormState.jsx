import { useForm } from "react-hook-form";

const FormStateExample = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, isSubmitting },
  } = useForm({ mode: "onChange" });
//isValidate: true if the form is valid
//isDirty: true if the form is modified

  const delay = (ms) => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve()
      },ms*1000)
    })
  }

  const onSubmit = async (data) => {

    //delay for 2 seconds to show the isSubmitting stat
    await delay(2);

    console.log("Submitted Data:", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: "Name is required" })} placeholder="Enter Name" />

      <p>{isDirty ? "Form is modified" : "Form is untouched"}</p>
      <p>{isValid ? "Form is valid" : "Form is invalid"}</p>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default FormStateExample;
