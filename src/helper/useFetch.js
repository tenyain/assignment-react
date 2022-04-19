import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            const response = await fetch(url);

            if (!response.ok) {
                const message = `An error has occured: ${response.status}`;
                console.log('Error is occurred.');
                setError(true);
                setLoading(false);
                throw new Error(message);
            }else {
                const res_data = await response.json();
                setData(res_data);
                setLoading(false);
                setError(false)
                return res_data;
            }
        }

        fetchData();
    }, [url])

    return { loading, data, error }
}

export default useFetch;
