import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form/FormInput";

import { actionLogin } from "../../api/auth";
import { SubmitButtons } from "../../components/form/Buttons";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/validator";
const Login = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const { isSubmitting, errors } = formState;
  //   console.log(errors.password?.message);
  const hdlSubmit = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const res = await actionLogin(value);
      console.log(res);
      createAlert("success", "Login Success");
      reset();
    } catch (error) {
      createAlert("info", error.response?.data?.message);
    }
  };

  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="w-64 h-full p-4 m-4 rounded-md shadow-md border">
        <h1 className="text-xl font-bold text-black text-center">Login</h1>
        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col px-2 py-4 gap-4">
            <FormInput register={register} name="email" errors={errors} />
            <FormInput
              register={register}
              type="password"
              name="password"
              errors={errors}
            />
          </div>

          <div className="flex justify-center">
            <SubmitButtons isSubmitting={isSubmitting} label="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
