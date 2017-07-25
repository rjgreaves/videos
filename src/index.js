/**
 * Created by reube on 24/07/2017.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import config  from '../config';
import SearchBar from './components/search-bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = config.youTubeApiKey;

// Create a new component. This component should produce some HTML
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('cats');

    }

    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term: term
        }, (videos) =>{
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render()
    {
        return (
            <div>
                <SearchBar onSearchTermChanged={term => this.videoSearch(term) }/>
                <VideoDetail video={ this.state.selectedVideo } />
                <VideoList
                    videos={ this.state.videos }
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                />
            </div>
        );
    }
};

// Take this components HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector(".container"));