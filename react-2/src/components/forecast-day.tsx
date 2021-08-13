import React from "react";
import { IForecastDay } from "../helpers/interfaces";
import { Wind, ThermometerLow, Droplet, ThermometerHigh, SunriseFill, SunsetFill, Calendar3 } from "react-bootstrap-icons";

interface IProps {
    info: IForecastDay
}

export const ForecastDay = ({ info }: IProps) => {
    if (info.date !== undefined)
        return (
            <div className="row bg-light border-bottom rounded">
                <div className="col-2">
                    <h3 className="text-center pt-5"><Calendar3 /> {info.date}</h3>
                </div>
                <div className="col-2">
                    <div className="d-flex flex-column">
                        <img className="mx-auto mb-1" style={{ width: '80px', height: '80px' }} src={info.day.condition.icon}></img>
                        <h5 className="text-center">{info.day.condition.text}</h5>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-1">
                    <h1><ThermometerHigh className="w-100" /></h1>
                    <h5 className="text-center">Max
                        <br />
                        {info.day.maxtemp_c} <sup>o</sup>C
                    </h5>
                </div>
                <div className="col-1">
                    <h1><ThermometerLow className="w-100" /></h1>
                    <h5 className="text-center">Min
                        <br />
                        {info.day.mintemp_c} <sup>o</sup>C
                    </h5>
                </div>
                <div className="col-1">
                    <h1><Droplet className="w-100" /></h1>
                    <h5 className="text-center">Average
                        <br />
                        {info.day.avghumidity} %
                    </h5>
                </div>
                <div className="col-1">
                    <h1><Wind className="w-100" /></h1>
                    <h5 className="text-center">Max
                        <br />
                        {info.day.maxwind_mph} mph
                    </h5>
                </div>
                <div className="col-1"></div>
                <div className="col-1">
                    <h1><SunriseFill className="w-100" /></h1>
                    <h5 className="text-center">
                        <br />
                        {info.astro.sunrise}
                    </h5>
                </div>
                <div className="col-1">
                    <h1><SunsetFill className="w-100" /></h1>
                    <h5 className="text-center">
                        <br />
                        {info.astro.sunset}
                    </h5>
                </div>
            </div>
        );
    else return (<div>No data to display</div>);
}