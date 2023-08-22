import axios from "axios";
import { useState } from "react";

const Cameras = () => {
  const [data, setData] = useState("");
  const apiUrl =
    "https://1i1dzjf685.execute-api.us-west-1.amazonaws.com/v1/post-json";

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    console.log(data);
  };

  return (
    <div>
      <h1>Cameras</h1>
      <button onClick={fetchData}>Click Me!</button>
    </div>
  );
};

export default Cameras;
