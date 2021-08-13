import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./Home";
import { DetailedForecast } from "./DetailedForecast";

const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={() => <Home name="moscow" />} />
            <Route exact path="/:name" children={<DetailedForecast />} />
        </BrowserRouter>
    );
}

export default App;
