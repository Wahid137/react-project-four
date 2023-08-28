const Loading = () => {
  return (
    <LoadingContainer>
      <div className="spinner">
        Loading...
        <div className="spinner-sector spinner-sector-1"></div>
        <div className="spinner-sector spinner-sector-2"></div>
        <div className="spinner-sector spinner-sector-3"></div>
        <div className="spinner-sector spinner-sector-4"></div>
      </div>
    </LoadingContainer>
  );
};

export default Loading;
