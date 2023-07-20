"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import Loader from "./Loader";

const SaveButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className="flex items-center gap-1 px-3 py-1 mt-2 text-sm text-white bg-blue-500 border rounded max-w-min">
      {pending ? (
        <>
          <Loader className="w-4 h-4" /> Saving...
        </>
      ) : (
        "Save"
      )}
    </button>
  );
};

export default SaveButton;
