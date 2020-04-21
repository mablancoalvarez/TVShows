const ENDPOINT = 'http://api.tvmaze.com/search/shows?q=girls';

const fetchData = () => fetch(ENDPOINT).then(response => response.json())

export default fetchData;