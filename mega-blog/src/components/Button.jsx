function Button({ children, className, ...props }) {
  return (
    <button
      className={`rounded-lg px-4 py-2 bg-green-500 font-semibold text-black cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
