import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./CountryDetails.scss";

const CountryDetails = () => {
  const [country, setCountry] = useState([] || null);
  const [loading, setLoading] = useState(false);

  //get the country id from the url
  const { id } = useParams();
//   console.log("id", id);
  const getCountry = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${id}`
      );
      console.log("response", response?.data);
      setLoading(false);
      setCountry(response?.data[0]);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getCountry();
    }
  }, [id]);

//   console.log("nativeName", country);

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <div className="cta">
            <Link to='/'>Back</Link>
          </div>
          <div className='card-details'>
            <div className='card-img'>
              <img src={country?.flags?.png} alt={country?.name?.common} />
            </div>
            <div className='card-body'>
              <h1>{country?.name?.common}</h1>
              <div className='card-content'>
                <div>
                  <p>
                    Native Name:{" "}
                    {country?.name?.nativeName?.fra?.official ||
                      country?.name?.nativeName?.eng?.official ||
                      country?.name?.nativeName?.nld?.official ||
                      country?.name?.nativeName?.deu?.official ||
                      country?.name?.nativeName?.spa?.official ||
                      country?.name?.nativeName?.por?.official ||
                      country?.name?.nativeName?.rus?.official ||
                      country?.name?.nativeName?.jpn?.official ||
                      country?.name?.nativeName?.ita?.official ||
                      country?.name?.nativeName?.zho?.official ||
                      country?.name?.nativeName?.swe?.official}
                  </p>
                  <p>Population: {country?.population}</p>
                  <p>Region: {country?.region}</p>
                  <p>Sub Region: {country?.subregion}</p>
                  <p>Capital: {country?.capital}</p>
                </div>
                <div>
                  <p>
                    Language:{" "}
                    <span>
                      {country?.languages?.eng ||
                        country?.languages?.fra ||
                        country?.languages?.nld ||
                        country?.languages?.deu ||
                        country?.languages?.spa ||
                        country?.languages?.por ||
                        country?.languages?.rus ||
                        country?.languages?.jpn ||
                        country?.languages?.ita ||
                        country?.languages?.zho ||
                        country?.languages?.swe ||
                        country?.languages?.ara ||
                        country?.languages?.ces ||
                        country?.languages?.fin ||
                        country?.languages?.hrv ||
                        country?.languages?.hun ||
                        country?.languages?.isl ||
                        country?.languages?.kor ||
                        country?.languages?.nld ||
                        country?.languages?.pol ||
                        country?.languages?.slk ||
                        country?.languages?.slv ||
                        country?.languages?.urd ||
                        country?.languages?.vie ||
                        "No language"}
                    </span>
                  </p>
                  {/* <p>
                  Currency:{" "}
                  {Object.entries(
                    country.length === 1 && country?.currencies
                  ).map((item) => {
                    console.log("colony", item[0]?.name);
                    console.log("hello")
                  })}
                </p> */}
                  {/* <p>
                  {country?.currencies?.MYR?.name ||
                    country?.currencies?.EUR?.name ||
                    country?.currencies?.USD?.name ||
                    country?.currencies?.GBP?.name ||
                    country?.currencies?.INR?.name ||
                    country?.currencies?.AUD?.name ||
                    country?.currencies?.CAD?.name ||
                    country?.currencies?.SGD?.name ||
                    country?.currencies?.CHF?.name ||
                    country?.currencies?.HKD?.name ||
                    country?.currencies?.JPY?.name ||
                    country?.currencies?.CNY?.name ||
                    country?.currencies?.SEK?.name ||
                    country?.currencies?.AED?.name ||
                    country?.currencies?.AFN?.name ||
                    country?.currencies?.ALL?.name ||
                    country?.currencies?.AMD?.name ||
                    country?.currencies?.ANG?.name ||
                    country?.currencies?.AOA?.name ||
                    country?.currencies?.ARS?.name ||
                    country?.currencies?.AWG?.name ||
                    country?.currencies?.AZN?.name ||
                    country?.currencies?.BAM?.name ||
                    country?.currencies?.BBD?.name ||
                    country?.currencies?.BDT?.name ||
                    country?.currencies?.BGN?.name ||
                    country?.currencies?.BHD?.name ||
                    country?.currencies?.BIF?.name ||
                    country?.currencies?.BMD?.name ||
                    country?.currencies?.BND?.name ||
                    country?.currencies?.BOB?.name ||
                    country?.currencies?.BRL?.name ||
                    country?.currencies?.BSD?.name ||
                    country?.currencies?.BTN?.name ||
                    country?.currencies?.BWP?.name ||
                    country?.currencies?.BYN?.name ||
                    country?.currencies?.BZD?.name ||
                    country?.currencies?.CDF?.name ||
                    country?.currencies?.CLF?.name ||
                    country?.currencies?.CLP?.name ||
                    country?.currencies?.COP?.name ||
                    country?.currencies?.CRC?.name ||
                    country?.currencies?.CUC?.name ||
                    country?.currencies?.CUP?.name ||
                    country?.currencies?.CVE?.name ||
                    country?.currencies?.CZK?.name ||
                    country?.currencies?.DJF?.name ||
                    country?.currencies?.DKK?.name ||
                    country?.currencies?.DOP?.name ||
                    country?.currencies?.DZD?.name ||
                    country?.currencies?.EGP?.name ||
                    country?.currencies?.ERN?.name ||
                    country?.currencies?.ETB?.name ||
                    country?.currencies?.FJD?.name ||
                    country?.currencies?.FKP?.name ||
                    country?.currencies?.GEL?.name ||
                    country?.currencies?.GGP?.name ||
                    country?.currencies?.GHS?.name ||
                    country?.currencies?.GIP?.name ||
                    country?.currencies?.GMD?.name ||
                    country?.currencies?.GNF?.name ||
                    country?.currencies?.GTQ?.name ||
                    country?.currencies?.GYD?.name ||
                    country?.currencies?.HNL?.name ||
                    country?.currencies?.HRK?.name ||
                    country?.currencies?.HTG?.name ||
                    country?.currencies?.HUF?.name ||
                    country?.currencies?.IDR?.name ||
                    country?.currencies?.ILS?.name ||
                    country?.currencies?.IMP?.name ||
                    country?.currencies?.IQD?.name ||
                    country?.currencies?.IRR?.name ||
                    country?.currencies?.ISK?.name ||
                    country?.currencies?.JEP?.name ||
                    country?.currencies?.JMD?.name ||
                    country?.currencies?.JOD?.name ||
                    country?.currencies?.KES?.name ||
                    country?.currencies?.KGS?.name ||
                    country?.currencies?.KHR?.name ||
                    country?.currencies?.KMF?.name ||
                    country?.currencies?.KPW?.name ||
                    country?.currencies?.KRW?.name ||
                    country?.currencies?.KWD?.name ||
                    country?.currencies?.KYD?.name ||
                    country?.currencies?.KZT?.name ||
                    country?.currencies?.LAK?.name ||
                    country?.currencies?.LBP?.name ||
                    country?.currencies?.LKR?.name ||
                    country?.currencies?.LRD?.name ||
                    country?.currencies?.LSL?.name ||
                    country?.currencies?.LYD?.name ||
                    country?.currencies?.MAD?.name ||
                    country?.currencies?.MDL?.name ||
                    country?.currencies?.MGA?.name ||
                    country?.currencies?.MKD?.name ||
                    country?.currencies?.MMK?.name ||
                    country?.currencies?.MNT?.name ||
                    "No currency found"}
                </p> */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CountryDetails;
