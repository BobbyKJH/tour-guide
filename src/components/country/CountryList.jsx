import axios from "axios";
import React, { useEffect, useState } from "react";
import Country from "./Country";

function CountryList({ countryList }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get(countryList).then((res) => {
      setList(res.data.data);
    });
  }, [countryList]);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        {list.map((map) => (
          <Country key={map.id} title={map.country_nm} img={map.download_url} />
        ))}
      </div>
    </>
  );
}

export default CountryList;
