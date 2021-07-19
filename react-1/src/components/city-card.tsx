import React, { Component } from 'react'
import { IForecast, apiKey } from '../interfaces'
import { Wind, ThermometerHalf, Droplet, TriangleHalf } from 'react-bootstrap-icons'

interface IProps {
    name: string
}

interface IState {
    forecast: IForecast,
    isLoading: boolean,
    error?: string
}

export class CityCard extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            forecast: {} as IForecast,
            isLoading: true
        };
    }

    shouldComponentUpdate(nextProps: IProps, nextState: IState) {
        return (nextProps.name != this.props.name || nextState.isLoading !== this.state.isLoading || nextState.error !== this.state.error);
    }

    componentDidUpdate(prevProps: IProps) {
        if (this.props.name !== prevProps.name) {
            this.setState({ error: "", isLoading: true });

            fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.props.name}&aqi=no`)
                .then(response => response.json())
                .then(result => {
                    if (result.hasOwnProperty("error"))
                        this.setState({ error: result.error.message });
                    else
                        this.setState({ forecast: result as IForecast });
                    this.setState({ isLoading: false });
                });
        }
    }

    render() {
        const { location, current } = this.state.forecast;
        if (location !== undefined) {
            return (
                <div className="w-100">
                    <div className="row rounded bg-success text-white">
                        <div className="col-6">
                            <h1 className="text-uppercase">{location.name}</h1>
                            <h5 className="text-light">{location.country}</h5>
                            <p className="fst-italic">{current.last_updated}</p>
                        </div>
                        <div className="col-3">
                            <h3 className="my-3">{current.temp_c} <sup>o</sup>C</h3>
                        </div>
                        <div className="col-3">
                            <img className="mx-1" style={{ width: '64px', height: '64px' }} src={current.condition.icon}></img>
                            <br />
                            <p className="text-center">{current.condition.text}</p>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-4">
                            <Wind className="w-100" />
                            <p className="text-center">Wind
                                <br />
                                {current.wind_mph} mph
                            </p>
                        </div>
                        <div className="col-4">
                            <Droplet className="w-100" /><p className="text-center">Humidity
                                <br />
                                {current.humidity} %
                            </p>
                        </div>
                        <div className="col-4">
                            <ThermometerHalf className="w-100" />
                            <p className="text-center">Feels like
                                <br />
                                {current.feelslike_c} <sup>o</sup>C
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
        else if (this.state.error !== undefined && this.state.error !== "")
            return (<div className="w-100 text-center">{this.state.error}</div>);
        else
            return (<div className="w-100 text-center py-5">No data to display</div>);

    }
}