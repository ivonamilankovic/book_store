import {useState, useEffect, useCallback} from "react";
import Routing from "../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min";
const routes = require("../routes.json");
Routing.setRoutingData(routes);

export const useFetchData = (url, urlParams = {}) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData= useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch(Routing.generate(url, urlParams));
            const fetchedData = await response.json();
            setData(JSON.parse(fetchedData));
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    },[url]);

    useEffect(() => {
        fetchData();
    }, [url,fetchData]);

    return {isLoading, data};
}