import axios from 'axios';


const KEY = 'AIzaSyCCypjY1O3lTSu1t_IzN_s6jD2BxL9bXQ4';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});


