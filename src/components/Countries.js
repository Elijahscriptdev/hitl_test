import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "./Countries.scss";
import { Link } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      const search = e.target.value;
      const filteredCountries = countries.filter((country) => {
        return country.name.common.toLowerCase().includes(search.toLowerCase());
      });
      setSearchResults(filteredCountries);
    },
    [countries]
  );

  const handleFilter = async (e) => {
    const filter = e.target.value;
    try {
      setLoading(true);
      const response = await axios.get(
        `https://restcountries.com/v3.1/region/${filter}`
      );
      console.log("response", response?.data);
      setLoading(false);
      setCountries(response?.data);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const getCountries = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://restcountries.com/v3.1/all");
      console.log("response", response?.data);
      setLoading(false);
      setCountries(response?.data);
      setSearchResults(response?.data);
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
        <>
          <div
            className='search'
            style={{
              margin: "30px auto",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <input
              type='text'
              placeholder='Search for a country...'
              onChange={(e) => handleSearch(e)}
            />

            <select name='region' id='region' onChange={(e) => handleFilter(e)}>
              <option value=''>Filter by Region</option>
              <option value='Africa'>Africa</option>
              <option value='Americas'>Americas</option>
              <option value='Asia'>Asia</option>
              <option value='Europe'>Europe</option>
              <option value='Oceania'>Oceania</option>
            </select>
          </div>
          <div className='wrapper'>
            {searchResults?.map((country) => (
              <Link to={`/country/${country?.cca3}`} key={country?.cca3}>
                <div key={country?.name?.common} className='card'>
                  <div className='card-img'>
                    <img
                      src={country?.flags?.png}
                      alt={country?.name?.common}
                    />
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
        </>
      )}
    </>
  );
};

export default Countries;
