import { useForm, useWatch } from "react-hook-form";

const WatchExample = () => {
  const { register, control } = useForm();
  const name = useWatch({ control, name: "name" });

  return (
    <div>
      <input {...register("name")} placeholder="Enter Name" />
      <p>Live Preview: {name}</p>
    </div>
  );
};

export default WatchExample;
