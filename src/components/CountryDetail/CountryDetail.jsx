import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
  //   const { country, handleVisitedCountry, handleVisitedFlags } = props;
  return (
    <div>
      <h3>Country Detail</h3>
      {/* <CountryData
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      /> */}
      <CountryData {...props} />
    </div>
  );
};

export default CountryDetail;
