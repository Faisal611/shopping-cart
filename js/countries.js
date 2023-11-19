// Countries Api
const countries = () => {
    fetch('https://restcountries.com/v3.1/all\n')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
countries();
const displayCountries = (countries) => {
    const countriesId = document.getElementById('countriesId');
    console.log(countries)
    for (const countrie of countries) {
        const div = document.createElement('div');
        div.classList.add('class')
        div.innerHTML = `
            <h3>${countrie.region}</h3>
            <p>${countrie.capital}</p>
            <button onclick="loadCountriesDetails('${countrie.region}')">Detailes</button>
        `
        countriesId.appendChild(div);
    }
}
const loadCountriesDetails = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data =>console.log(data[0]))
    
}
