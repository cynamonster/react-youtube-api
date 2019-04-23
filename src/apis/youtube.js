import axios from 'axios';

const KEY = 'AIzaSyCkicSfnugB1ZP7BNzQ2zFMFbuo6ADysmI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});
