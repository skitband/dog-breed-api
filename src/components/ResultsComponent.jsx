import { useState, useEffect } from "react";
import DogImageComponent from "./DogImageComponent";
import FilterComponent from "./FilterComponent";

const ResultsComponent = ({ resultsData }) => {
  const [orderValue, setOrderValue] = useState("name");
  const [sortedData, setSortedData] = useState([]);

  const handleSelectChange = (e) => {
    setOrderValue(e.target.value);
  };

  useEffect(() => {
    const orderBy = (property) => {
      return function (a, b) {
        if (a[property] < b[property]) {
          return -1;
        }
        if (a[property] > b[property]) {
          return 1;
        }
        return 0;
      };
    };

    if (orderValue === "name") {
      setSortedData([...resultsData].sort(orderBy("name")));
    } else if (orderValue === "height") {
      setSortedData(
        [...resultsData].sort((a, b) => {
          const aHeight = parseInt(a.height.metric.split(" - ")[0]);
          const bHeight = parseInt(b.height.metric.split(" - ")[0]);
          return aHeight - bHeight;
        })
      );
    } else if (orderValue === "life_span") {
      setSortedData([...resultsData].sort(orderBy("life_span")));
    }
  }, [orderValue, resultsData]);

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        {sortedData.length === 0 ? (
          <div>No results found. Try searching again.</div>
        ) : (
          <>
            <div className="col-3">
              <FilterComponent
                setOrderValue={orderValue}
                handleSelectChange={handleSelectChange}
              />
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
              {sortedData.map((dog) => (
                <div className="col" key={dog.id}>
                  <div className="card bg-light-subtle mt-2">
                    <DogImageComponent breedId={dog.reference_image_id} />
                    <div className="card-body">
                      <div className="text-section">
                        <h6 className="card-title fw-bold">{dog.name}</h6>
                        <p className="card-text py-2 text-secondary">
                          Height: {dog.height.metric} <br /> Weight:{" "}
                          {dog.weight.metric}
                        </p>
                      </div>
                      <div className="cta-section">
                        <div className="text-secondary float-right">
                          Life Span: <br />
                          {dog.life_span}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultsComponent;
