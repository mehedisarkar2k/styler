const SubCard = ({ children, className }) => {
  return (
    <div
      className={`block p-6 mx-auto container bg-white rounded-lg border border-gray-200 shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default SubCard;
