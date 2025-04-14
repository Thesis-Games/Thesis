import React from "react";
import background from "../picture/front.gif";
import { FormLayoutComponent } from "./FormLayoutComponent";
import TitleComponent from "./TitleComponent";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";
import { resetPasswordSchema } from "../validation/reset-password.-schema";
import ButtonRecovery from "./ButtonRecovery";
import ResetPasswordHook from "../hook/reset-password";
import { handleErrorAlert } from "./sweet-alert";
const ResetPassword = () => {
  const { id } = useParams();
  const { loading, handleResetPassword } = ResetPasswordHook();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = (data) => {
    if (data.password === data.confirmpassword) {
      const resetData = {
        newpassword: data.password,
        token: id,
      };
      handleResetPassword(resetData);
      return;
    }

    handleErrorAlert("Password not match");
  };
  return (
    <div
      className="w-full h-screen relative flex items-center justify-center flex-col"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <FormLayoutComponent>
        <div>
          <TitleComponent title={"Reset"} />
        </div>

        <form
          className="w-full flex flex-col gap-7 items-center font-mono "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("password")}
            placeholder="New Password"
            type="password"
            className="p-3 rounded-full  bg-black text-white text-center font-bold  w-[90%]  tracking-wide text-xl border-2 border-[#ffffff] shadow-lg shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <input
            {...register("confirmpassword")}
            type="password"
            placeholder="Confirm Password"
            className="p-3 rounded-full  bg-black text-white text-center font-bold  w-[90%]  tracking-wide text-xl border-2 border-[#ffffff] shadow-lg shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff"
          />
          {errors.confirmpassword && (
            <p className="text-red-500">{errors.confirmpassword.message}</p>
          )}
        </form>
      </FormLayoutComponent>
      <div>
        <ButtonRecovery handleSubmit={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
};

export default ResetPassword;
