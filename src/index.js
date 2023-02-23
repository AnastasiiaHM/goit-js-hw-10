import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import { contriesMarkup } from './markup';
const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');
const wraperCardCountry = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(handleInputChange, DEBOUNCE_DELAY));

function handleInputChange(e) {
  const inputValue = e.target.value.trim();
  if (!inputValue) {
    wraperCardCountry.innerHTML = '';
    listEl.innerHTML = '';
    return;
  }
  wraperCardCountry.innerHTML = '';
  listEl.innerHTML = '';
  fetchCountries(inputValue).then(data =>
    contriesMarkup(data, listEl, wraperCardCountry)
  );
}
