export const Card = ({ children, className }) => {
  return (
    <div
      className={`p-5 rounded-xl border border-gray-200 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};
