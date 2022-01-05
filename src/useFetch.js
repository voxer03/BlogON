import {useState, useEffect} from 'react';

const useFetch=(url)=>{
    const [data, setData]=useState(null);
    const [isLoading, setIsLoading]=useState(true);
    
    useEffect(()=>{

        const abortCont= new AbortController();

        setTimeout(() =>{
            fetch( url, { signal: abortCont.signal} )
            .then(res => {
                return res.json();
            })
            .then(data => {
                setIsLoading(false);
                setData(data);
            })
            .catch(err=>{
                if(err.name==='AbortError'){
                    console.log('AbortError Reported');
                }
            })
        },1000)
        return () => abortCont.abort();
    },[url]);

    return {data, isLoading};

}

export default useFetch;