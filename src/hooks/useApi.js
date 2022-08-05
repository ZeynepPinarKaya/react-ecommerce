import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://nextjs-baby-api.vercel.app/api/'

function useApi() {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setloading] = useState(true);

    const fetchData = (endpoint) => {
        const url = `${API_URL}${endpoint}`

        axios
            .get(url)
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError({url: endpoint, message: err?.message});
            })
            .finally(() => {
                setloading(false);
            });
    };

    return [
        fetchData,
        {
            response,
            error,
            loading
        }
    ]
}

export default useApi