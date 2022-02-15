import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  email: string;
  password: string;
}

export default function Forms() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const onValid = (data: LoginForm) => {
    console.log("success");
  };
  const onInvalid = (error: FieldErrors) => {
    console.log(error);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "The username should be longer than 2 chars.",
            value: 2,
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", { required: "Email is required" })}
        type="Email"
        placeholder="Email"
      />
      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
