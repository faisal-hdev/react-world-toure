import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  console.log(handleVisitedCountry);

  return (
    <div className={`country ${visited ? "visited" : "none-visited"}`}>
      <h2 style={{ fontSize: "30px", color: visited ? "purple" : "white" }}>
        Name : {name?.common}
      </h2>
      <img src={flags?.png} alt="" />
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p>Code : {cca3}</p>
      <button onClick={handleVisited}>Mark Visited</button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have visited this country" : "I want to visit"}
    </div>
  );
};

export default Country;
