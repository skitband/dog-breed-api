const LoadingComponent = () => {
  return (
    <div className="d-flex justify-content-center p-3 mt-4">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingComponent;
