import { useLocation } from "react-router-dom"
import { useEffect } from "react";


const home = () => {
    const location = useLocation();

    useEffect(() => {
        console.log(`Current Path = ${location.pathname}`);
    }, [location]);


    return (
        <>
            <div>Home page</div>
        </>
    );
}

export default home