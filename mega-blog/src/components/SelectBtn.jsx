import { forwardRef, useId } from "react";

function SelectBtn({ label, options = [], className = "", ...props }, ref) {
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

      <select
        id={id}
        {...props}
        ref={ref}
        className={`w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-slate-400 transition-all duration-200 outline-none appearance-none cursor-pointer font-medium ${className}`}
      >
        {options.map((item, idx) => (
          <options
            value={item}
            className="bg-white text-slate-900 py-2"
            key={idx}
          >
            {item}
          </options>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(SelectBtn);
