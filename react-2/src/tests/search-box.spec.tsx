import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SearchBox } from "../components/search-box";

describe('<SearchBox />', () => {
    const mock = jest.fn();
    it('should display filter popup on input focus', async () => {
        const { container } = render(<SearchBox onCityChanged={mock} />);
        fireEvent.focus(screen.getByPlaceholderText("type", { exact: false }));
        await waitFor(() => {
            expect(container.querySelector("#searchResults")).toBeInTheDocument();
        });
    });
});