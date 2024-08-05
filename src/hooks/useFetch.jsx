import { useState, useEffect } from 'react';
import { fetchCities } from '../services/api';

export const useFetch = (query, limit, offset) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const result = await fetchCities(query, limit, offset);
                setData(result.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [query]);

    return { data, loading, error };
};
