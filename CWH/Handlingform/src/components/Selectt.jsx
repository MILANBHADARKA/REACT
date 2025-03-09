import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" }
];

export default function Selectt() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="fruit"
        control={control}
        render={({ field }) => <Select {...field} options={options} />}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
