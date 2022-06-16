import axios from "axios";
import React, { useEffect, useState } from "react";
import Country from "./Country";

function CountryList({ country }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get(country).then((res) => {
      setList(res.data.data);
    });
  }, [country]);
  return (
    <div>
      {list.map((country) => (
        <Country />
      ))}
    </div>
  );
}

export default CountryList;
