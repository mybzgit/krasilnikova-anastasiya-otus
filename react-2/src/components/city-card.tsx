import React, { useEffect, useState } from "react";
import { IForecast } from "../helpers/interfaces";
import { weatherCurrentApiRequest } from "../helpers/api-queries";
import { Wind, ThermometerHalf, Droplet, GeoAlt, Clock } from "react-bootstrap-icons";
import fetch from "node-fetch";

interface IProps {
    name: string
}

export const CityCard = ({ name }: IProps) => {

    const [currentForecast, setCurrentForecast] = useState({} as IForecast);
    const [error, setError] = useState("");

    useEffect(() => {
        if (name != "")
            fetch(weatherCurrentApiRequest.replace("cityName", name))
                .then(response => response.json())
                .then(result => {
                    if (result.hasOwnProperty("error"))
                        setError(result.error.message);
                    else {
                        setCurrentForecast(result as IForecast);
                    }
                });
    }, [name]);

    const { location, current } = currentForecast;
    if (location !== undefined) {
        return (
            <div className="w-100">
                <div className="row rounded bg-success text-white">
                    <div className="col-6">
                        <h1 className="text-uppercase">{location.name}</h1>
                        <h5 className="text-light"><GeoAlt /> {location.country}</h5>
                        <p className="fst-italic"><Clock /> {location.localtime}</p>
                    </div>
                    <div className="col-3">
                        <h3 className="my-3">{current.temp_c} <sup>o</sup>C</h3>
                    </div>
                    <div className="col-3">
                        <div className="d-flex flex-column">
                            <img className="mx-auto mb-3" style={{ width: '64px', height: '64px' }} src={current.condition.icon}></img>
                            <p className="text-center">{current.condition.text}</p>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-4">
                        <h3><Wind className="w-100" /></h3>
                        <p className="text-center">Wind
                            <br />
                            {current.wind_mph} mph
                        </p>
                    </div>
                    <div className="col-4">
                        <h3><Droplet className="w-100" /></h3>
                        <p className="text-center">Humidity
                            <br />
                            {current.humidity} %
                        </p>
                    </div>
                    <div className="col-4">
                        <h3><ThermometerHalf className="w-100" /></h3>
                        <p className="text-center">Feels like
                            <br />
                            {current.feelslike_c} <sup>o</sup>C
                        </p>
                    </div>
                </div>
            </div>
        );
    }
    else if (error !== undefined && error !== "")
        return (<div className="w-100 text-center">{error}</div>);
    else
        return (<div className="w-100 text-center py-5">No data to display</div>);
}