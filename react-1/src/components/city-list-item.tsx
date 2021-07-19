import React, { Component } from 'react'
import { IForecast, apiKey } from '../interfaces'

interface IProps {
    name: string,
    selected: boolean
}

interface IState {
    forecast: IForecast,
    isLoading: boolean
}

export class CityListItem extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            forecast: {} as IForecast,
            isLoading: true
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    shouldComponentUpdate(nextProps: IProps, nextState: IState){
        return (nextProps.name !== this.props.name || nextProps.selected !== this.props.selected ||nextState.isLoading !== this.state.isLoading);
    }

    componentDidUpdate(prevProps: IProps) {
        if (this.props.name !== prevProps.name) {
            this.fetchData();
        }
    }

    render() {
        const { forecast, isLoading } = this.state;
        if (isLoading)
            return (<div>Loading...</div>);
        else
            return (
                <div>
                    <div className={this.getSelectedStyle() + " row rounded border-bottom"}>
                        <div className="col-6">
                            <h5 className="my-2">{forecast.location.name}</h5>
                        </div>
                        <div className="col-4">
                            <h5 className="my-2">{forecast.current.temp_c} <sup>o</sup>C</h5>
                        </div>
                        <div className="col-2">
                            <img className="my-1" style={{ width: '30px', height: '30px' }} src={forecast.current.condition.icon}></img>
                        </div>
                    </div>
                </div>
            );
    }

    getSelectedStyle(): string {
        if (this.props.selected)
            return "bg-success text-white";
        else
            return "bg-light";
    }

    fetchData(): void {
        fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.props.name}&aqi=no`)
            .then(response => response.json())
            .then(result => {
                this.setState({ forecast: result as IForecast });
                this.setState({ isLoading: false });
            });
    }
}