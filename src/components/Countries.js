import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Countries.scss"

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const getCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      console.log("response", response?.data);
      setCountries(response?.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className='wrapper'>
      {countries?.map((country) => (
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
      ))}
    </div>
  );
};

export default Countries;
