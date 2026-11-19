import { useEffect, useState } from 'react';
import { Search } from './Search';
import axios from 'axios';
import { CountriesList } from './CountriesList';

const getNormalizedSearchValue = (value) => value.trim().toLowerCase();

const getCountriesToShow = ({ countries, searchValue }) => {
  const normalizedSearchValue = getNormalizedSearchValue(searchValue);
  return countries.filter((c) =>
    c.name.common.toLowerCase().includes(normalizedSearchValue),
  );
};

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const { data } = await axios.get(
        'https://studies.cs.helsinki.fi/restcountries/api/all',
      );

      setCountries(data);
    };
    getCountries();
  }, []);

  const countriesToShow = getCountriesToShow({ countries, searchValue });

  return (
    <div>
      <h1>countries</h1>
      <div style={{ marginBottom: '16px' }}>
        <Search value={searchValue} setValue={setSearchValue} />
      </div>
      {getNormalizedSearchValue(searchValue).length > 0 && (
        <CountriesList key={searchValue} countries={countriesToShow} />
      )}
    </div>
  );
};

export default App;
