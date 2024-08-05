import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchCities = async (query, limit, offset) => {
    try {
        const response = await axios.get(`${API_URL}/v1/geo/cities`, {
            headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
            },
            params: {
                namePrefix: query,
                limit:limit,
                offset
            }
        });
        console.log(response);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching cities:', error);
        return { data: [] };
    }
};
