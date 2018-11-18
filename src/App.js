import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getTracks} from "./actions/tracks";

class App extends Component {
    submitTrack = () => {
        if (this.trackInput.value !== '') {
            this.props.onAddTrack(this.trackInput.value);
        }
        this.trackInput.value = '';
    };
    findTrack = () => {
        this.props.onFindTrack(this.searchInput.value);
        this.searchInput.value = '';
    };
    render() {
        let trackList = this.props.tracks;
        console.log(trackList);
        if (trackList.length !== 0) {
            trackList = this.props.tracks.map((track, i) => <li key={i}>{track.name}</li>);
        } else {
            trackList = 'Add Some Tracks'
        }
        return (
            <div className="App">
                <header className="App-header">
                    <button onClick={this.props.onGetTracks}>Fetch</button>
                    <div>
                        <input ref={(input) => this.searchInput = input} type="text"/>
                        <button onClick={this.findTrack}>Find</button>
                    </div>
                    <div>
                        <input ref={(input) => this.trackInput = input} type="text"/>
                        <button onClick={this.submitTrack}>Submit</button>
                        <ul className="list-tracks">
                            {trackList}
                        </ul>
                    </div>
                </header>
            </div>
        );
    }
}

export default connect(
    state => ({
        tracks: state.tracks.filter((track) => track.name.includes(state.filterTracks))
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            const payload = {
                id: Date.now().toString(),
                name: trackName
            };
            dispatch({type: 'ADD_TRACK', payload})
        },
        onFindTrack: (name) => {
            console.log(name);
            dispatch({type: 'FIND_TRACK', payload: name})
        },
        onGetTracks: () => {
            dispatch(getTracks());
        }
    })
)(App);
