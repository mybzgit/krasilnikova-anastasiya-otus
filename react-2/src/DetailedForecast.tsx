import React, { useEffect, useState } from "react";
import { Clock, GeoAlt } from "react-bootstrap-icons";
import { IForecast } from "./helpers/interfaces";
import { weatherApiRequest } from "./helpers/api-queries";
import { ForecastDay } from "./components/forecast-day";
import { useParams } from "react-router-dom";
import fetch from "node-fetch";

interface IParamTypes {
    name: string;
}

export const DetailedForecast = () => {
    const [info, setInfo] = useState({} as IForecast);
    const [error, setError] = useState("");
    const { name } = useParams<IParamTypes>();

    useEffect(() => {
        if (name != "")
            fetch(weatherApiRequest.replace("cityName", name))
                .then(response => response.json())
                .then(result => {
                    if (result.hasOwnProperty("error"))
                        setError(result.error.message);
                    else {
                        setInfo(result as IForecast);
                    }
                });
    }, [name]);

    const { location, forecast } = info;
    if (location !== undefined) {
        return (
            <div className="mx-auto" style={{ width: '1200px' }}>
                <div className="mt-3">
                    <div className="bg-success text-white text-center w-100 py-3 rounded">
                        <h1 className="text-uppercase">{location.name}</h1>
                        <h4><GeoAlt /> {location.country}</h4>
                        <i><h3><Clock /> {location.localtime}</h3></i>
                    </div>
                    {forecast.forecastday.map(day =>
                        <div key={day.date}>
                            <ForecastDay info={day}></ForecastDay>
                        </div>
                    )}
                </div>
            </div>
        );
    }
    else if (error !== undefined && error !== "")
        return (<div className="w-100 text-center">{error}</div>);
    else
        return (<div className="w-100 text-center py-5">No data to display</div>);
}