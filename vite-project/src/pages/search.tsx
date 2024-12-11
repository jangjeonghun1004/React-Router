import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const search = () => {
    const location = useLocation();
    const queryParam = new URLSearchParams(location.search);
    const keyWord = queryParam.get('keyWord');

    useEffect(() => {
        console.log(`Current pathname = ${location.pathname}`);
        console.log(`keyword = ${keyWord}`);
    }, [location, keyWord]);

    return (
        <>
            <div>Search Page.</div>
        </>
    );
} 

export default search