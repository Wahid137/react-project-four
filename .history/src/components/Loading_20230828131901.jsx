const Loading = () => {
  return (
    <LoadinContainer>
      <div className="spinner">
        Loading...
        <div className="spinner-sector spinner-sector-1"></div>
        <div className="spinner-sector spinner-sector-2"></div>
        <div className="spinner-sector spinner-sector-3"></div>
        <div className="spinner-sector spinner-sector-4"></div>
      </div>
    </LoadinContainer>
  );
};

export default Loading;
