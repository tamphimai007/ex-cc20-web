import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form/FormInput";
import { SubmitButtons } from "../../components/form/Buttons";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/validator";
import { actionRegister } from "../../api/auth";

const RegisterWithHookForm = () => {
  // JS
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const { isSubmitting, errors } = formState;

  const hdlSubmit = async (value) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 2000));
    // e.preventDefault();
    try {
      const res = await actionRegister(value);
      createAlert("success", "Register Success");
      reset();
    } catch (error) {
      createAlert("info", error.response?.data?.message);
    }
  };
  //   console.log(errors);
  //   console.log(errors.password?.message);
  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="w-64 m-4 p-4 rounded-md shadow-md border">
        <h1 className="text-xl font-bold text-black text-center">
          Register with HookForm
        </h1>
        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col px-2 py-4 gap-2">
            <FormInput register={register} name="name" errors={errors} />
            <FormInput register={register} name="email" errors={errors} />
            <FormInput register={register} name="password" errors={errors} />
            <FormInput
              register={register}
              name="confirmPassword"
              errors={errors}
            />
          </div>

          <div>
            <div className="flex justify-center">
              <SubmitButtons isSubmitting={isSubmitting} label={"Register"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegisterWithHookForm;
