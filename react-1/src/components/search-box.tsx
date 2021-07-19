import React, { Component, PureComponent } from 'react'

interface IProps {
  onCityChanged: any
}

interface IState {
  cityName: string
}

export class SearchBox extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      cityName: ""
    };
  }

  render() {
    return (
      <div className="row mt-3">
        <div className="col-6">
          <input className="form-control" onChange={this.textChanged} placeholder="Type a city name..."></input>
        </div>
        <div className="col-6">
          <button className="btn btn-success" onClick={this.search}>Search</button>
        </div>
      </div>);
  }

  textChanged = (e: any) => {
    this.setState({ cityName: e.target.value });
  }

  search = () => {
    this.props.onCityChanged(this.state.cityName);
  }
}