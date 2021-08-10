import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CityCard } from "../components/city-card";

describe('<CityCard />', () => {
    it('should render as empty', () => {
        render(<CityCard name="" />)
        expect(screen.getByText("no data to display", { exact: false })).toBeInTheDocument();
    });
    it('should render city forecast for moscow', async () => {
        render(<CityCard name="moscow" />);
        await waitFor(() => {
            expect(screen.getByText("moscow", { exact: false })).toBeInTheDocument();
        });
    });
    it('should render error for incorrect city name', async () => {
        render(<CityCard name="123" />);
        await waitFor(() => {
            expect(screen.getByText("no matching location found", { exact: false })).toBeInTheDocument();
        });
    });
});