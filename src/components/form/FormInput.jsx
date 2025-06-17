// rafce
const FormInput = ({ register, name, errors }) => {
  return (
    <>
      <input
        className="w-full border border-gray-400 
      rounded-md p-1 px-4"
        type="text"
        name={name}
        {...register(name)}
        placeholder={name}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </>
  );
};
export default FormInput;
