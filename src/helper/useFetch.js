import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(url);
                const data = await response.json();

                setData(data);
                setLoading(false);
            }catch(error){
                setError(error);
                setLoading(false);
            }
        }

        fetchData();
    }, [url])

    return { loading, data, error}
}

export default useFetch;
