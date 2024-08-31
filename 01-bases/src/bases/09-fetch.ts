import type { GIFResponse } from '../interfaces/gif.response';
const apiKey = 'xQUD6FMS4fu1kDMJRt1UHTHOue2eiFG4';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
.then(resp => resp.json())
.then((body: GIFResponse) => console.log(body.data))
.catch(err => console.info(err))