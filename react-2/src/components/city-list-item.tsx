import React, { useEffect, useState } from "react";
import { IForecast } from "../helpers/interfaces";
import { weatherCurrentApiRequest } from "../helpers/api-queries";
import fetch from "node-fetch";

interface IProps {
    name: string,
    selected: boolean
}

export const getSelectedStyle = (selected: boolean): string => {
    if (selected)
        return "bg-success text-white";
    else
        return "bg-light";
}

export const CityListItem = ({ name, selected }: IProps) => {

    const [currentForecast, setCurrentForecast] = useState({} as IForecast);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (name != "")
            fetch(weatherCurrentApiRequest.replace("cityName", name))
                .then(response => response.json())
                .then(result => {
                    if (result.hasOwnProperty("error"))
                        setError(result.error.message);
                    else
                        setCurrentForecast(result as IForecast);
                    setLoading(false);
                });
    }, [name]);

    if (isLoading)
        return (<div>Loading...</div>);
    else if (currentForecast.location !== undefined) {
        return (
            <div className={getSelectedStyle(selected) + " row rounded border-bottom"}>
                <div className="col-6">
                    <h5 className="my-2">{currentForecast.location.name}</h5>
                </div>
                <div className="col-4">
                    <h5 className="my-2">{currentForecast.current.temp_c} <sup>o</sup>C</h5>
                </div>
                <div className="col-2">
                    <img className="my-1" style={{ width: '30px', height: '30px' }} src={currentForecast.current.condition.icon}></img>
                </div>
            </div>
        );
    }
    else
        return (<div>{error}</div>);
}