const BASE_URL = 'https://pixabay.com';
const API_KEY = '34703273-719fc97d4df3919ec9a1e2b2b';
export const getPictures = (searchText) => {
  return fetch(`${BASE_URL}/api/?q=${searchText}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
}
