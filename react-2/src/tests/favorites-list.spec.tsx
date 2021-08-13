import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FavoritesList } from "../components/favorites-list";

describe('<FavoritesList />', () => {
    const mock = jest.fn();
    it('should render as empty', () => {
        render(<FavoritesList cities={[]} selected="moscow" onCityChanged={mock} />)
        expect(screen.getByText("favorites", { exact: false })).toBeInTheDocument();
    });
    it('should render city items', async () => {
        const cities = ["moscow", "la", "osaka"];
        render(<FavoritesList cities={cities} selected="moscow" onCityChanged={mock} />);
        await waitFor(() => {
            expect(screen.getByText("osaka", { exact: false })).toBeInTheDocument();
        });
    });
});