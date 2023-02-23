import { Notify } from 'notiflix/build/notiflix-notify-aio';
export const contriesMarkup = (data, element, container) => {
  const markup = data
    .map(
      el => `
        <li class = "listItem">
            <img src="${el.flags.svg}" height="40px" width="40px"/>
            <span>${el.name.official}</span>
      </li>
    `
    )
    .join('');
  const markupCard = data
    .map(
      el => `
       <ul class="card">
         <li><img src="${el.flags.svg}" height="40px" width="40px"/>
            <h1>${el.name.official}</h1></li>
           <li><h2>Capital:${el.capital}</h2></li> 
           <li><h2>Population:${el.population}</h2></li>
           <li><h2>Languages:${Object.values(el.languages)}</h2></li>
            </ul>
    `
    )
    .join('');
  console.log(data);
  if (data.length > 10) {
    return Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
  if (data.length >= 2 && data.length <= 10) {
    element.insertAdjacentHTML('beforeend', markup);
  } else {
    container.insertAdjacentHTML('beforeend', markupCard);
  }
};
