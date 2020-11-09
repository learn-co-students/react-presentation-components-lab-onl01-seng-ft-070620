import React from 'react'

export default class SimpleComponent extends React.Component {
    state = {mood: 'happy'}

    render() {
        return <div onClick={(e) => this.setState(previousState => ({mood: previousState.mood === 'happy'?'sad':'happy'}))}>{this.state.mood}</div>
    }
}