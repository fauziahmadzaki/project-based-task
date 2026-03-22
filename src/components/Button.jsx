export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-xl bg-cyan-800 hover:bg-cyan-900  text-white font-semibold inline-flex cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
