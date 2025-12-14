import { forwardRef, useRef } from "react";

const CustomInput = forwardRef(({ placeholder, label, className }, ref) => {
  return (
    <div className="mb-6">
      <label className="mb-1 block text-sm font-medium text-gray-300"> 
        {label}
      </label>
      <input
        type="text"
        ref={ref}
        placeholder={placeholder}
        className={` w-full px-4 py-2 ,bg-transparent ,border-b border-gray-500 ,text-white ,transition,${className},`} />
    </div>
  );
});

function RefProps() {
  let inputRef = useRef(null);
  let secondInputRef = useRef(null);

  const focusInput = () => inputRef?.current?.focus();

  const getIntputValue = () => {
    if (inputRef?.current) {
      alert(`Input value : ${inputRef.current.value}`);
    }
  };

  const clearInputValue = () => {
    if (inputRef?.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const focusSecondInputRef = () => secondInputRef?.current?.focus();

  const getSecondInputValue = () => {
    if (secondInputRef?.current) {
      alert(`Second Input value : ${secondInputRef.current.value}`);
    }
  };

  const clearSecondInputValue = () => {
    if (secondInputRef?.current) {
      secondInputRef.current.value = "";
      secondInputRef.current.focus();
    }
  };

  return (
    <div className="bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-lg text-white">
        <h1 className="text-2xl font-semibold mb-6 text-center">RefProps</h1>

        <CustomInput
          placeholder="What is your name"
          label="Name"
          ref={inputRef}
        />

        <CustomInput
          placeholder="What is your real name"
          label="Real Name"
          ref={secondInputRef}
        />
        <div className="grid grid-cols-2 gap-3 mt-6">
          <button onClick={focusInput} className="btn-primary">Focus Input</button>
          <button onClick={getIntputValue} className="btn-secondary">Input Value</button>
          <button onClick={clearInputValue} className="btn-warning">Clear Input</button>
          <button onClick={focusSecondInputRef} className="btn-primary">Focus Second</button>
          <button onClick={getSecondInputValue} className="btn-secondary">Second Value</button>
          <button onClick={clearSecondInputValue} className="btn-warning">Clear Second</button>
          <button 
            onClick={() => {
              clearSecondInputValue();
              clearInputValue();
            }}
            className="col-span-2 btn-danger" > Clear Both </button>
        </div>
      </div>
    </div>
  );
}

export default RefProps;
