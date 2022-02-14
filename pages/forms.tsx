import { useForm } from "react-hook-form";

export default function Forms() {
  const { register, handleSubmit } = useForm();
  const onValue = () => {
    console.log("success");
  };
  return (
    <form onSubmit={handleSubmit(onValue)}>
      <input
        {...register("username", { required: true })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", { required: true })}
        type="Email"
        placeholder="Email"
      />
      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
