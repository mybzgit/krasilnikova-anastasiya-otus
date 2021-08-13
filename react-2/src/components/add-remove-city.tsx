import React from "react";

interface IProps {
    presentInList: string,
    onCityStateChanged: any
}

export const getButtonText = (presentInList: string): string => {
    if (presentInList == "yes")
        return "Remove";
    else if (presentInList == "no")
        return "Add";
    else
        return "";
}

export const AddRemoveCity = ({ presentInList, onCityStateChanged }: IProps) => {

    const onClick = () => onCityStateChanged(presentInList == "no");

    const buttonText = getButtonText(presentInList);
    if (buttonText != "")
        return (
            <button className="btn btn-outline-success btn-sm w-100 mb-1 fw-bold" onClick={onClick}>{buttonText}</button>
        );
    else
        return (<></>);
}