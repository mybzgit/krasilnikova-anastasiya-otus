import React, { ChangeEvent, useEffect, useState } from "react";

interface IProps {
  onCityChanged: any
}

export const SearchBox = ({ onCityChanged }: IProps) => {

  const [cityName, setCityName] = useState("");
  const [visibility, setVisibility] = useState("d-none");
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    if (localStorage.getItem("cities") !== null) {
      let data: any = localStorage.getItem("cities");
      setCities(data.split(","));
    }
  }, []);

  const textChanged = (e: ChangeEvent<HTMLInputElement>) => setCityName(e.target.value);

  const search = () => {
    if (cityName != "")
      onCityChanged(cityName);
  }

  const onFocus = () => {
    setVisibility("d-flex flex-column");
  }
  const onBlur = () => {
    setTimeout(() => {
      setVisibility("d-none");
    }, 200);
  }

  return (
    <div className="row">
      <div className="col-9">
        <input className="form-control" onChange={textChanged} onFocus={onFocus} onBlur={onBlur}
          placeholder="Type a city name..." value={cityName}></input>

        <div id="searchResults" className={visibility + " border bg-white position-absolute overflow-auto"} style={{ maxHeight: '300px', width: '300px' }}>
          {
            cities.filter(city => city.toLowerCase().includes(cityName.toLowerCase())).map(filteredName => (
              <button type="button" className="btn btn-outline-success text-start" key={filteredName} onClick={() => setCityName(filteredName)}>
                {filteredName}
              </button>
            ))
          }
        </div>

      </div>
      <div className="col-3">
        <button className="btn btn-success w-100" onClick={search}>SEARCH</button>
      </div>
    </div >);
}