import { useEffect, useState } from "react";

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const result = await fetchFunction(); // Actually call the function and await the result
            setData(result); // Set the fetched data
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setData(null);
        setError(null);
        setLoading(false);
    };

    useEffect(() => {
        if (autoFetch) {
            fetchData();
        }
    }, []); // You might want to add fetchFunction to dependencies if it can change

    return { data, loading, error, fetchData, reset };
};

export default useFetch;