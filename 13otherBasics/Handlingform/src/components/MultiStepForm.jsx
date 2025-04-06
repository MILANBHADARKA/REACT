import { useState } from "react";
import { useForm } from "react-hook-form";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onNext = () => setStep((prev) => prev + 1);
  const onBack = () => setStep((prev) => prev - 1);
  const onSubmit = (data) => console.log("Final Data:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Step 1 */}
      {step === 1 && (
        <>
          <h2>Step 1: Personal Info</h2>
          <input {...register("name", { required: "Name is required" })} placeholder="Enter Name" />
          {errors.name && <p>{errors.name.message}</p>}

          <button type="button" onClick={onNext}>Next</button>
        </>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <>
          <h2>Step 2: Contact Details</h2>
          <input {...register("email", { required: "Email is required" })} placeholder="Enter Email" />
          {errors.email && <p>{errors.email.message}</p>}

          <button type="button" onClick={onBack}>Back</button>
          <button type="button" onClick={onNext}>Next</button>
        </>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <>
          <h2>Step 3: Review & Submit</h2>
          <p><strong>Name:</strong> {watch("name")}</p>
          <p><strong>Email:</strong> {watch("email")}</p>

          <button type="button" onClick={onBack}>Back</button>
          <button type="submit">Submit</button>
        </>
      )}
    </form>
  );
};

export default MultiStepForm;
