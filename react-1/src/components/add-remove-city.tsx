import React, { Component } from 'react'

interface IProps {
    presentInList: string,
    onCityStateChanged: any
}

export class AddRemoveCity extends Component<IProps> {

    shouldComponentUpdate(nextProps: IProps){
        return (nextProps.presentInList != this.props.presentInList);
    }

    render() {
        if (this.getButtonText() != "")
            return (
                <button className="btn btn-outline-success btn-sm w-100 mb-1 fw-bold" onClick={this.onClick}>{this.getButtonText()}</button>
            );
        else
            return (<div></div>);
    }
    
    getButtonText(): string {
        if (this.props.presentInList == "yes")
            return "Remove";
        else if (this.props.presentInList == "no")
            return "Add";
        else
            return "";
    }

    onClick = () => {
        this.props.onCityStateChanged(this.props.presentInList == "no");
    }
}