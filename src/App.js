import './App.css';
import { FaSearch } from 'react-icons/fa';

const App = () => {
  return (
    <div className="container">
      <h1>Data for Countries</h1>
      <main>
        <div className="country-search">
          <form id="submit">
            <input type="text" id="input-country" placeholder="Which country are you looking for?" />
            <button type="submit" id="search-btn"><FaSearch /></button>
          </form>
        </div>
        <div className="country-information">Test Test Test</div>
      </main>
    </div>
  )
}

export default App