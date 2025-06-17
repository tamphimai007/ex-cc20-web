// rafce
import { Loader } from "lucide-react";
export const SubmitButtons = ({ isSubmitting, label }) => {
  return (
    <button
      disabled={isSubmitting}
      className=" bg-black text-white px-4 
  py-1 rounded-md hover:cursor-pointer font-semibold"
    >
      {isSubmitting ? (
        <div className="flex gap-2">
          <Loader className="animate-spin" />
          <p>Loading</p>
        </div>
      ) : (
        <p>{label}</p>
      )}
    </button>
  );
};
