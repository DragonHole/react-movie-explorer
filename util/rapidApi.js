import axios from "axios"

export const api_base_url = 'https://moviesdatabase.p.rapidapi.com';

// headers: {
//     'X-RapidAPI-Key': 'd6bbe018d1mshddb46c65af34496p1bfe94jsn1b509c1379e3',
//     'X-RapidAPI-Host': 'most-popular-movies-right-now-daily-update.p.rapidapi.com'

export const fetchApi = async (url) => {
    const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles',
        headers: {
          'X-RapidAPI-Key': 'd6bbe018d1mshddb46c65af34496p1bfe94jsn1b509c1379e3',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
    
    const response = await axios.get(url, options)
    return response.data;

    // axios.request(options).then(function (response) {
    //       //console.log(response.data);
    //       console.log('fetched')
    //       return response.data;
    //   }).catch(function (error) {
    //       console.error(error);
    //   });
}