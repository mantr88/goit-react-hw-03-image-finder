import axios from "axios";

const KEY = '34533361-52f77fc65512da5c1ec10b6c5';
axios.defaults.baseURL = `https://pixabay.com/api/`;

export const fetchGalery = (query) => {
    const response = axios.get(`?q=${query}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response;
    };