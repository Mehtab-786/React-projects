import { useState } from "react";

function Button({
  text,
  type = "button",
  onclick,
  disabled = false,
  size,
  color,
}) {
  return (
    <button
      type={type}
      onClick={onclick}
      disabled={disabled}
      className={`px-6 py-2 rounded-lg font-medium text-white
      ${size == "small" ? "px-4 py-2 text-sm" : ""}
      ${size == "large" ? "px-8 py-4 text-xl" : ""}
      ${color == "primary" ? "bg-blue-500" : ""}
      ${color == "secondary" ? "bg-amber-600" : ""}
      ${color == "danger" ? "bg-red-500" : ""}
      ${color == "success" ? "bg-green-600" : ""}
      ${disabled && "opacity-50 cursor-not-allowed bg-gray-500"}
      `}
    >
      {" "}
      {text}{" "}
    </button>
  );
}

function BasicProps() {
  const [count, setCount] = useState(0);
  return (
    <div className="p-5">
      <h1 className="text-3xl py-2 font-medium">Basic Props and Customized Button</h1>
      <p className="text-gray-300 mb-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil vel unde
        omnis reiciendis sunt quibusdam aspernatur atque dolorem amet
      </p>
      <div className="w-full  bg-gray-700 py-3 mb-5">
        <h3 className="px-10 text-xl font-semibold">Different Colors</h3>
        <div className="w-full flex items-center justify-center gap-10">
          <Button
            color="primary"
            size="small"
            text="primary"
            onclick={() => setCount(count + 1)}
          />
          <Button
            color="secondary"
            size="small"
            text="secondary"
            onclick={() => setCount(count + 1)}
          />
          <Button
            color="danger"
            size="small"
            text="danger"
            onclick={() => setCount(count + 1)}
          />
          <Button
            color="success"
            size="small"
            text="success"
            onclick={() => setCount(count + 1)}
          />
        </div>
      </div>
      <div className="w-full bg-gray-700 py-3 mb-5">
        <h3 className="px-10 text-xl font-semibold">Different Sizes</h3>
        <div className="w-full flex items-center justify-center gap-10">
          <Button
            color="primary"
            size="small"
            text="Small"
            onclick={() => setCount(count + 1)}
          />
          <Button
            color="secondary"
            size="medium"
            text="Medium(default)"
            onclick={() => setCount(count + 1)}
          />
          <Button
            color="danger"
            size="large"
            text="Large"
            onclick={() => setCount(count + 1)}
          />
        </div>
      </div>
      <div className="w-full bg-gray-700 py-3 mb-5">
        <h3 className="px-10 text-xl font-semibold">Disabled States</h3>
        <div className="w-full flex items-center justify-center gap-10">
          <Button
            color="primary"
            text="Enabled"
            onclick={() => setCount(count + 1)}
          />
          <Button color="secondary" size="large" text="Disabled" />
        </div>
      </div>
      <h1 className="px-10 text-2xl font-semibold">Clicked : {count}</h1>
    </div>
  );
}

export default BasicProps;
