const MainCard = ({ children, style }) => {
  return (
    <div style={style} className="block p-6 mx-auto container">
      {children}
    </div>
  );
};

export default MainCard;
