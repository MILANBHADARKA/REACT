import { useForm, useFieldArray } from "react-hook-form";

const DynamicForm = () => {
  const { register, control, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({ control, name: "users" });

  function submit(data) {
    console.log(data);
    }

  return (
    <form onSubmit={handleSubmit(submit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input {...register(`users.${index}.name`)} placeholder="User Name" />
          <button type="button" onClick={() => remove(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={() => append({})}>Add User</button>
      <button type="submit">Submit</button>
    </form>
  );
};
export default DynamicForm;
