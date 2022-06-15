import axios from "axios";
import React, { useEffect, useState } from "react";

function Country({ country }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get(country).then((res) => {
      setList(res.data.data);
    });
  }, [country]);
  return (
    <div>
      {list.map((co) => (
        <div key={co.id}>{co.id}</div>
      ))}
    </div>
  );
}

export default Country;
