import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Countries.scss";
import { Link } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const getCountries = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://restcountries.com/v3.1/all");
      console.log("response", response?.data);
      setLoading(false);
      setCountries(response?.data);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className='wrapper'>
          {countries?.map((country) => (
            <Link to={`/country/${country?.cca3}`} key={country?.cca3}>
              <div key={country?.name?.common} className='card'>
                <div className='card-img'>
                  <img src={country?.flags?.png} alt={country?.name?.common} />
                </div>
                <div className='card-body'>
                  <p>{country?.name?.common}</p>
                  <p>{country?.capital}</p>
                  <p>{country?.region}</p>
                  <p>{country?.subregion}</p>
                  <p>{country?.population}</p>
                  <p>{country?.languages?.eng}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Countries;
