import React from 'react';
import cx from 'classnames';

const countries = ['Belgium', 'France', 'Germany', 'Holland', 'Ireland', 'Italy', 'Luxemburg', 'Portugal', 'Spain'];

function CountrySelector({ countryListOpen, selectedCountry, selectCountry, handleBlur, handleFocus}){

  const listClasses = cx('country-input__list',  {
    'country-input__list--visible': countryListOpen
  });

  return (
    <div className="country-input">
      <input
        type="text"
        className="country-input__field"
        value={selectedCountry}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className={listClasses}>
        <ul>
          {countries.map( country => {
            return <li key={country} onMouseDown={() => selectCountry(country)}>{country}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default CountrySelector;
