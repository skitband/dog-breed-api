import React, { useState, useEffect } from "react";

const InputBreedComponent = ({ onKeySearch }) => {
  const [inputBreed, setInputBreed] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onKeySearch(inputBreed);
    }, 1000);

    return () => clearTimeout(timer);
  }, [inputBreed]);

  const handleInputChange = (e) => {
    setInputBreed(e.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 py-4">
          <h3 className="mt-3">Find Dog Breeds</h3>
        </div>
        <div className="col-6 py-4">
          <h4></h4>
          <div>
            <input
              className="form-control form-control-lg"
              type="text"
              value={inputBreed}
              onChange={handleInputChange}
              placeholder="Search Breed Name"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBreedComponent;
