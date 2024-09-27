import axios from 'axios';
import { GIFResponse } from '../interfaces/gif.response';

const apiKey = 'xQUD6FMS4fu1kDMJRt1UHTHOue2eiFG4';

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,
    }
});


export default giphyApi;

giphyApi.get<GIFResponse>('/random')
.then(res => console.log(res.data.data))
.catch(err => console.log(err))

