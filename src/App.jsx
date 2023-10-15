import { useState, useEffect } from "react";
import axios from "axios";
import InputBreedComponent from "./components/InputBreedComponent";
import "./App.css";
import ResultsComponent from "./components/ResultsComponent";
import LoadingComponent from "./components/LoadingComponent";

function App() {
  const apiKey =
    "live_gQU5Su1BHPF4dCn3QqKE79V60nLgNpNaClHKMoUIHRaXmck0xh0cxNaVROwY5sLq"; // api key from email received on sign up

  const headers = {
    "x-api-key": apiKey,
  };

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBreeds = async (inputBreed) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.thedogapi.com/v1/breeds/search?q=${inputBreed}`,
        { headers },
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <main>
        <InputBreedComponent onKeySearch={fetchBreeds} />
        {isLoading && <LoadingComponent />}
        <ResultsComponent resultsData={data} />
      </main>
    </div>
  );
}

export default App;
