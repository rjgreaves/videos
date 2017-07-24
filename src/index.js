/**
 * Created by reube on 24/07/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import config  from '../config';
import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyDks_1Pon6YAcAybABmdtUDi8ssaOyM3c4';

// Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

// Take this components HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector(".container"));