import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required")
}).required();

export default function Yupp() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  function Submit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(Submit)}>
      <input {...register("name")} placeholder="Enter name" />
      {errors.name && <p>{errors.name.message}</p>}

      <input {...register("email")} placeholder="Enter email" />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
