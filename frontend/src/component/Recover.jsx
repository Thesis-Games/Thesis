import React from "react";
import background from "../picture/Front.gif";
import { FormLayoutComponent } from "./FormLayoutComponent";
import TitleComponent from "./TitleComponent";
import ButtonRecovery from "./ButtonRecovery";
import ForgotPasswordHook from "../hook/forgot-password-hook";
import { forgotPasswordFormSchema } from "../validation/forgot-password-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const Recover = () => {
  const { handleForgotPassword, loading } = ForgotPasswordHook();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordFormSchema),
  });

  const onSubmit = (data) => {
    handleForgotPassword(data);
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
          <TitleComponent title={"Recover"} />
        </div>

        <form
          className="w-full flex flex-col gap-7 items-center font-mono "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("email")}
            placeholder="Email"
            className="p-3 rounded-full  bg-black text-white text-center font-bold  w-[90%]  tracking-wide text-xl border-2 border-[#ffffff] shadow-lg shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </form>
      </FormLayoutComponent>
      <div>
        <ButtonRecovery handleSubmit={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
};

export default Recover;
