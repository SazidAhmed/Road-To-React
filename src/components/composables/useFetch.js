import { useState, useEffect } from 'react';

const useFetch = (url, ) =>{
    //State Hook
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);
    const [refetch, setRefetch] = useState(false)

    //runs when render
    useEffect(()=>{

        const abortFetch = new AbortController();

        fetch(url, { signal: abortFetch.signal })
        .then(res =>{
            if(!res.ok){
                throw Error('could not Fetch the data for that resource');
            }
            return res.json()
        })
        .then((data)=>{
            setData(data);
            setIsLoading(false);
            setIsError(null);
            setRefetch(false);
        })
        .catch((err)=>{
            if(err.name === 'AbortError'){
                console.log('fetch aborted')
            }else{
                setIsLoading(false);
                setIsError(err.message);
            }
            setRefetch(false)
        })

        return ()=> abortFetch.abort();
    }, [url, refetch]);

    return {data, isLoading, isError, setRefetch}
}

export default useFetch;