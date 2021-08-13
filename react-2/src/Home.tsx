import React, { useState, useEffect } from "react";
import { SearchBox } from "./components/search-box";
import { CityCard } from "./components/city-card";
import { FavoritesList } from "./components/favorites-list";
import { AddRemoveCity } from "./components/add-remove-city";
import bigCities from "./helpers/cities";
import { Link } from "react-router-dom";

interface IProps {
    name: string
}

export const cityInList = (cityName: string, favList: string[]): string => {
    if (cityName == "")
        return "";
    else {
        const inList: boolean = favList.map(city => city.toLowerCase()).includes(cityName.toLowerCase());
        if (inList)
            return "yes";
        else
            return "no";
    }
}

export const Home = ({ name }: IProps) => {

    const [cityName, setCityName] = useState(name);
    const [favList, setFavList] = useState(["la", "moscow", "rome", "osaka", "samarkand"]);

    useEffect(() => {
        localStorage.setItem("cities", bigCities.join(","));
        if (localStorage.getItem("favorites") !== null) {
            let data: any = localStorage.getItem("favorites");
            setFavList(data.split(","));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", favList.join(","));
    }, [favList]);

    const cityChanged = (value: string) => setCityName(value);

    const favoritesChanged = (addToList: boolean) => {
        if (addToList)
            setFavList([...favList, cityName]);
        else
            setFavList(favList.filter(c => c !== cityName));
    }

    return (
        <div className="mx-auto px-3 py-3 bg-light" style={{ width: '950px' }}>
            <SearchBox onCityChanged={cityChanged} />

            <div className="row mt-3 mx-1">
                <div className="col-7 border border-success rounded">
                    <CityCard name={cityName}></CityCard>

                    <div className="row">
                        <div className="col-9">
                            <AddRemoveCity presentInList={cityInList(cityName, favList)} onCityStateChanged={favoritesChanged} />
                        </div>
                        <div className="col-3">
                            <Link to={"/" + cityName}>More details..</Link>
                        </div>
                    </div>
                </div>
                <div className="col-5 overflow-auto" style={{ height: '310px' }}>
                    <FavoritesList cities={favList} onCityChanged={cityChanged} selected={cityName}></FavoritesList>
                </div>
            </div>
        </div>
    );
}
