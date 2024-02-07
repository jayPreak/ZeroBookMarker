import axios from "axios";
import { useEffect, useState } from "react";
// import { RAPID_API_KEY } from "@env";

// const rapidApiKey = process.env.EXPO_PUBLIC_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "7b6078982fmsh16ef501dce9a9ddp1b6cdcjsn7f8e6506a773",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
    }
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("theres an error sire", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setIsLoading(true);
    fetchData;
  };

  return { data, isLoading, error, reFetch };
};

export default useFetch;
