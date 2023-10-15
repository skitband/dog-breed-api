import { useState, useEffect } from "react";
import axios from "axios";
import LoadingComponent from "./LoadingComponent";

const DogImageComponent = ({ breedId }) => {
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState([]);

  const fetchImage = async () => {
    try {
      const response = await axios.get(
        `https://api.thedogapi.com/v1/images/${breedId}`,
      );
      setImgUrl(response.data.url);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, [breedId]);

  const handleOnLoad = () => {
    setLoading(true);
  };

  return (
    <>
      {!loading && <LoadingComponent />}
      <img
        src={imgUrl}
        className={loading ? "card-img-top" : "card-img-top hidden"}
        alt="Dog Image"
        onLoad={handleOnLoad}
      />
    </>
  );
};

export default DogImageComponent;
