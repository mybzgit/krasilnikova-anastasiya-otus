import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { render } from 'react-dom'
import { SearchBox } from './components/search-box'
import { CityCard } from './components/city-card'
import { FavoritesList } from './components/favorites-list'
import { AddRemoveCity } from './components/add-remove-city'

interface IProps { }

interface IState {
    cityName: string,
    citiesList: Array<string>
}

class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            cityName: "",
            citiesList: ["London", "Moscow", "Tokio"]
        };
    }

    render() {
        return (
            <div className="ms-3" style={{ width: '950px' }}>
                <SearchBox onCityChanged={this.cityChanged} />
                <br />
                <div className="row">
                    <div className="col-6 ms-2 border border-success rounded">
                        <CityCard name={this.state.cityName} />
                        <AddRemoveCity presentInList={this.cityInList()} onCityStateChanged={this.favoritesChanged} />
                    </div>
                    <div className="col-4 ms-3 overflow-auto" style={{ height: '250px' }}>
                        <FavoritesList cities={this.state.citiesList} onCityChanged={this.cityChanged} selected={this.state.cityName} />
                    </div>
                </div>

            </div>
        );
    }

    cityChanged = (value: string) => {
        this.setState({ cityName: value });
    }

    favoritesChanged = (addToList: boolean) => {
        let citiesList = [...this.state.citiesList];
        let { cityName } = this.state;
        if (addToList)
            citiesList.push(cityName);
        else
            citiesList = citiesList.filter(c => c !== cityName);

        this.setState({ citiesList: citiesList });
    }

    cityInList(): string {
        if (this.state.cityName == "")
            return "";
        else{
            const inList: boolean = this.state.citiesList.map(city => city.toLowerCase()).includes(this.state.cityName.toLowerCase());
            if (inList)
                return "yes";
            else
                return "no";
        }
    }
}

render(
    <App />,
    document.getElementById('root')
);