import React, { Component } from 'react'
import { CityListItem } from './city-list-item'

interface IProps {
    cities: Array<string>,
    onCityChanged: any,
    selected: string
}

export class FavoritesList extends Component<IProps> {

    shouldComponentUpdate(nextProps: IProps){
        return (nextProps.cities.length !== this.props.cities.length || nextProps.selected !== this.props.selected);
    }

    render() {
        if (this.props.cities.length != 0)
            return (
                this.props.cities.map(city =>
                    <div key={city} onClick={() => this.itemClick(city)}><CityListItem name={city} selected={(city == this.props.selected)} /></div>
                )
            );
        else
            return (
                <div className="row rounded bg-light border h-100">
                    <p className="text-center my-3">Favorites</p>
                </div>
            );
    }
    
    itemClick = (cityName: string) => {
        this.props.onCityChanged(cityName);
    }
}