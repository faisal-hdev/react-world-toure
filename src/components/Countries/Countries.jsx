import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Countries : {countries.length}</h3>

      {/* Visited countries */}
      <div>
        <h4>Visited Countries : {visitedCountries.length}</h4>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3} style={{ fontSize: "22px" }}>
              {country.name.common}
            </li>
          ))}
        </ul>
      </div>

      {/* display flags */}
      <div className="flag-container">
        {visitedFlags.map((flag, idx) => (
          <img key={idx} src={flag}></img>
        ))}
      </div>

      {/* display countries */}
      <div className="countries-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
