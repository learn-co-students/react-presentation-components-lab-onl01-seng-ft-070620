// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component
{
    constructor(props)
    {
        super()
        this.state = {mood: 'happy'}
    }

    // changeSomethingOnDeeperLevelOfState()
    // {
    //     this.setState({
    //         keyOfDeeperLevel: {
    //           ...this.state.keyOfDeeperLevel,
    //           thingWeWannaChange: 'New Value'
    //         }
    //       });
    // }

    handleClick = () => {
        this.setState((previousState) => {
            if(previousState.mood === 'happy')
            {
                return {mood: 'sad'}
            }
            else
            {
                return {mood: 'happy'}
            }
        }) 
        //Just adding one as an example. You could call a function on this data if you wanted.
        //previousState parameter is automatically passed in. Name is descriptive.
    }

    // componentDidMount() {
    //     //this.interval = setInterval(this.fetchWeather, 15000);
    //     //can set up a constant fetch
    // }

    // componentWillUnmount() {
    //     //clearInterval(this.interval);
    //     //would stop the fetch set up in componentDidMount
    // }

    render()
    {
        return (<div onClick={this.handleClick}>{this.state.mood}</div>)
    }
}