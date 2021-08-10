import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AddRemoveCity } from "../components/add-remove-city";

describe('<AddRemoveCity />', () => {
    it('should render as empty', () => {
        const mock = jest.fn();
        render(<AddRemoveCity presentInList="" onCityStateChanged={mock} />);
        expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });
    it('should render as Remove for presentInList=yes', () => {
        const mock = jest.fn();
        render(<AddRemoveCity presentInList="yes" onCityStateChanged={mock} />);
        expect(screen.getByText("Remove")).toBeInTheDocument();
    });
    it('should render as Add for presentInList=no', () => {
        const mock = jest.fn();
        render(<AddRemoveCity presentInList="no" onCityStateChanged={mock} />);
        expect(screen.getByText("Add")).toBeInTheDocument();
    });
    it('should clicked one time', () =>{
        const mock = jest.fn();
        render(<AddRemoveCity presentInList="no" onCityStateChanged={mock} />);
        expect(fireEvent.click(screen.getByText("Add"))).toBeTruthy();
    });
});