import React from "react";
import background from "../picture/front.gif";
import { FormLayoutComponent } from "./FormLayoutComponent";
import TitleComponent from "./TitleComponent";
import ButtonComponent from "./ButtonComponent";
import { signupFormSchema } from "../validation/signup-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SignUpHook from "../hook/signup-hook";
import { handleErrorAlert } from "./sweet-alert";
const Signup = () => {
  const { handleSignup } = SignUpHook();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupFormSchema),
  });

  const onSubmit = (data) => {
    if (data.password !== data.confirmpassword) {
      handleErrorAlert("Password not match");
      return;
    }
    handleSignup(data);
  };
  return (
    <div
      className="w-full h-screen relative flex items-center justify-center flex-col"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover", // Makes the image cover the entire area
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      <FormLayoutComponent>
        <div>
          <TitleComponent title={"Sign Up"} />
        </div>
        <form
          className="w-full flex flex-col gap-5 items-center font-mono "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("username")}
            placeholder="Username"
            className="p-3 rounded-full bg-black text-white text-center font-bold w-[90%] tracking-wide  text-xl border-2 border-[#ffffff] shadow-lg shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff"
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}

          <input
            {...register("email")}
            placeholder="Email"
            className="p-3 rounded-full bg-black text-white text-center font-bold w-[90%] tracking-wide  text-xl border-2 border-[#ffffff] shadow-lg shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <input
            {...register("password")}
            placeholder="Password"
            type="password"
            className="p-3 rounded-full bg-black text-white text-center font-bold w-[90%] tracking-wide  text-xl border-2 border-[#ffffff] shadow-lg shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <input
            {...register("confirmpassword")}
            placeholder="Confirm Password"
            type="password"
            className="p-3 rounded-full bg-black text-white text-center font-bold w-[90%] tracking-wide  text-xl border-2 border-[#ffffff] shadow-lg shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff"
          />
          {errors.confirmpassword && (
            <p className="text-red-500">{errors.confirmpassword.message}</p>
          )}
        </form>
      </FormLayoutComponent>
      <ButtonComponent handleSignIn={handleSubmit(onSubmit)} />
    </div>
  );
};

export default Signup;
