import { Notify } from 'notiflix/build/notiflix-notify-aio';
const BASE_URL = 'https://restcountries.com/v3.1/';
export function fetchCountries(name) {
  return fetch(
    `${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    console.log(response);
    if (!response.ok) {
      Notify.failure('Oops, there is no country with that name');
    }
    return response.json();
  });
}
