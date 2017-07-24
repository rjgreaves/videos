/**
 * Created by reube on 24/07/2017.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import config  from '../config';
import SearchBar from './components/search-bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list';

const API_KEY = config.youTubeApiKey;

// Create a new component. This component should produce some HTML
class App extends Component {

    constructor(props) {
        super(props);
        this.state = { videos: [] };

        YTSearch({
            key: API_KEY,
            term: 'cats'
        }, (videos) =>{
            this.setState({ videos });
        });

    }

    render()
    {
        return (
            <div>
                <SearchBar/>
                <VideoList videos={ this.state.videos }/>
            </div>
        );
    }
};

// Take this components HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector(".container"));