import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ForecastDay } from "../components/forecast-day";
import { IForecastDay } from "../helpers/interfaces";

describe('<ForecastDay />', () => {
    it('should render as empty', () => {
        render(<ForecastDay info={{} as IForecastDay} />)
        expect(screen.getByText("no data", { exact: false })).toBeInTheDocument();
    });
});