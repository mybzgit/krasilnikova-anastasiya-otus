import React from "react";
import { CityListItem } from "../components/city-list-item";

interface IProps {
    cities: Array<string>,
    onCityChanged: any,
    selected: string
}

export const FavoritesList = ({ cities, onCityChanged, selected }: IProps) => {

    const itemClick = (cityName: string) => onCityChanged(cityName);

    if (cities.length != 0)
        return (
            <div className="ms-1">
                {cities.map(city =>
                    <div key={city} onClick={() => itemClick(city)}>
                        <CityListItem name={city} selected={(city == selected)} />
                    </div>
                )}
            </div>
        );
    else
        return (
            <div className="row rounded bg-light border h-100">
                <p className="text-center my-3">Favorites</p>
            </div>
        );
}