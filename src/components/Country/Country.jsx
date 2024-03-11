import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? "visited" : "none-visited"}`}>
      <h2 style={{ fontSize: "30px", color: visited ? "purple" : "blue" }}>
        Name : {name?.common}
      </h2>
      <img src={flags?.png} alt="" />
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p>Code : {cca3}</p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flag
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have visited this country" : "I want to visit"}
      <hr />
      <CountryDetail
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      />
    </div>
  );
};

export default Country;
