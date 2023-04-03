/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [backupData, setBackupData] = useState([]);
  const uri = `https://jsonplaceholder.typicode.com/posts`;
  const postData = JSON.parse(localStorage.getItem("postData"));
  useEffect(() => {
    axios
      .get(uri)
      .then((response) => {
        setData(response.data);
        setBackupData(response.data);
        localStorage.setItem("postData", JSON.stringify(response.data));
      })
      .catch((error) => console.log(error));
  }, []);

  if (!postData) {
    return [data, backupData];
  } else {
    return [postData, backupData];
  }
};

export default useFetch;
