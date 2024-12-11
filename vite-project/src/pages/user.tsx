import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";

const user = () => {
    const location = useLocation();
    const {id} = useParams();

    useEffect(() => {
        console.log(`Current Path = ${location.pathname}`);
        console.log(`Params = ${id}`);
    }, [location]);


    return (
        <>
            <div>User Page.</div>
        </>
    );
}

export default user