import { forwardRef, useId } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div>
      {label && (
        <label
          className="block text-sm font-semibold text-slate-700 mb-2"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={`w-full px-4 py-3 bg-white border border-slate-300 rounded-xs ${className}`}
        {...props}
        ref={ref}
      />
    </div>
  );
});

export default Input;
