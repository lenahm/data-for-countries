import './App.css';
import { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { FaLocationArrow, FaCompass, FaUser, FaHouseUser, FaCommentDots } from 'react-icons/fa';

const App = () => {
  const [ searchCountry, setSearchCountry ] = useState(''); 
  const [ result, setResult ] = useState(); 

  const handleCountryInput = e => {
    setSearchCountry(document.getElementById('input-country').value); 
  }

  useEffect(() => {
    if (searchCountry !== null && searchCountry.length !== 0) {
      axios
        .get(`https://restcountries.com/v3.1/name/${searchCountry}`)
        .then(res => setResult(res.data));
        
    }
  }, [searchCountry]); 

  if (result !== undefined && searchCountry !== '') {
    if (result.length > 1) {
      return (
        <div className="container">
          <h1>Data for Countries</h1>
          <main>
            <div className="country-search">
              <input type="text" id="input-country" placeholder="Which country are you looking for?" onChange={handleCountryInput} />
              <div className="alert">Too many matches, please be more specific.</div>
            </div>
          </main>
        </div>
      )
    } else {
      return (
        <div className="container">
          <h1>Data for Countries</h1>
          <main>
            <div className="country-search">
              <input type="text" id="input-country" placeholder="Which country are you looking for?" onChange={handleCountryInput} />
              <div className="alert hide"></div>
            </div>
            <div className="country-information">
              <h2>{result[0].name.common}</h2>
              <img src={result[0].flags.png} /> 
              <h3>{result[0].name.official}</h3><br />
              <p className="region-and-subregion"><FaLocationArrow /> {result[0].region} | {result[0].subregion}</p><br />
              <p classname="country-detail-information"><FaCompass /> {result[0].area} km<sup>2</sup></p><br />
              <p classname="country-detail-information"><FaUser /> {result[0].population} inhabitants</p><br />
              <p classname="country-detail-information"><FaHouseUser /> {result[0].capital[0]}</p><br />
              <p classname="country-detail-information"><FaCommentDots /> {Object.values(result[0].languages).map(language => <span>{language} </span>)}</p>
            </div>
          </main>
        </div>
      )
    }
  }

  return (
    <div className="container">
      <h1>Data for Countries</h1>
      <main>
        <div className="country-search">
          <input type="text" id="input-country" placeholder="Which country are you looking for?" onChange={handleCountryInput} />
          <div className="alert hide"></div>
        </div>
      </main>
    </div>
  )
}

export default App