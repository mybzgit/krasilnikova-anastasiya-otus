import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CityListItem } from "../components/city-list-item";

describe('<CityListItem />', () => {
    it('should render as empty', () => {
        render(<CityListItem name="" selected={false} />)
        expect(screen.getByText("loading", { exact: false })).toBeInTheDocument();
    });
    it('should render city forecast for moscow', async () => {
        render(<CityListItem name="moscow" selected={false} />);
        await waitFor(() => {
            expect(screen.getByText("moscow", { exact: false })).toBeInTheDocument();
        });
    });
    it('should render error for incorrect city name', async () => {
        render(<CityListItem name="123" selected={false} />);
        await waitFor(() => {
            expect(screen.getByText("no matching location found", { exact: false })).toBeInTheDocument();
        });
    });
});