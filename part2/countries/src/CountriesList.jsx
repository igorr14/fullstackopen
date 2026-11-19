import { useState } from 'react';
import { Country } from './Country';
import { Weather } from './Weather';

export const CountriesList = ({ countries }) => {
  const [currentCountry, setCurrentCountry] = useState(null);
  const length = countries.length;

  if (length > 10) {
    return <p>Too many matches, be more specific</p>;
  }

  const countryToShow = currentCountry ?? (length === 1 ? countries[0] : null);

  if (countryToShow) {
    return (
      <>
        <Country
          name={countryToShow.name.common}
          capital={countryToShow.capital}
          area={countryToShow.area}
          languages={Object.values(countryToShow.languages ?? {})}
          flagSrc={countryToShow.flags.png}
        />
        <Weather
          capital={countryToShow.capital?.[0]}
          latlng={countryToShow.capitalInfo?.latlng}
        />
      </>
    );
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0, maxWidth: '400px' }}>
      {countries.map((c) => (
        <li
          key={c.cca3}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            padding: '8px 0',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <span style={{ color: 'var(--text-h)' }}>{c.name.common}</span>
          <button
            onClick={() => setCurrentCountry(c)}
            style={{
              margin: 0,
              padding: '2px 10px',
              fontSize: '0.85em',
              color: 'var(--accent)',
            }}
          >
            Show more details
          </button>
        </li>
      ))}
    </ul>
  );
};
