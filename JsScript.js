const CountryCitiesList = [
  {
    name: 'Australia',
    abbreviation: 'AU',
    cities: ['Brisbane', 'Melbourne', 'Sydney'],
  },
  {
    name: 'Canada',
    abbreviation: 'CA',
    cities: ['Montreal', 'Toronto', 'Vancouver'],
  },
  {
    name: 'France',
    abbreviation: 'FR',
    cities: ['Lyon', 'Paris', 'Toulouse'],
  },
  {
    name: 'Germany',
    abbreviation: 'DE',
    cities: ['Berlin', 'Hamburg', 'Munich'],
  },
  {
    name: 'India',
    abbreviation: 'IND',
    cities: ['Bangalore', 'Delhi', 'Mumbai'],
  },
  {
    name: 'Italy',
    abbreviation: 'IT',
    cities: ['Milan', 'Naples', 'Rome'],
  },
  {
    name: 'Japan',
    abbreviation: 'JP',
    cities: ['Osaka', 'Tokyo', 'Yokohama'],
  },
  {
    name: 'New Zealand',
    abbreviation: 'NZ',
    cities: ['Auckland', 'Christchurch', 'Wellington'],
  },
  {
    name: 'Pakistan',
    abbreviation: 'PK',
    cities: ['Islamabad', 'Karachi', 'Lahore'],
  },
  {
    name: 'South Africa',
    abbreviation: 'ZA',
    cities: ['Cape Town', 'Durban', 'Johannesburg'],
  },
  {
    name: 'United Kingdom',
    abbreviation: 'UK',
    cities: ['Edinburgh', 'London', 'Manchester'],
  },
];

const countryDropdown = document.getElementById('country');
const cityDropdown = document.getElementById('city');
let selectedCountry;
let selectedCity;

const disableCitySelector = (state) => (cityDropdown.disabled = state);

const populateCountryDropdown = () => {
  CountryCitiesList.forEach((country) => {
    const option = document.createElement('option');

    option.value = country.abbreviation;
    option.textContent = country.name;
    countryDropdown.appendChild(option);
  });
};

const populateCityDropdown = (list) => {
  list?.forEach((city) => {
    const option = document.createElement('option');

    option.value = city;
    option.textContent = city;
    cityDropdown.appendChild(option);
  });
};

countryDropdown.addEventListener('change', () => {
  selectedCountry = countryDropdown.value;
  cityDropdown.innerHTML = '<option value="">Select the city</option>';

  disableCitySelector(!selectedCountry);

  let CitiesToBe = CountryCitiesList.find(
    (country) => country.abbreviation === selectedCountry,
  )?.cities;

  populateCityDropdown(CitiesToBe);
});

cityDropdown.addEventListener('change', () => {
  selectedCity = cityDropdown.value;
});

disableCitySelector(true);
document.addEventListener('DOMContentLoaded', populateCountryDropdown);
