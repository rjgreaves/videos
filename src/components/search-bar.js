/**
 * Created by reube on 24/07/2017.
 */
 import React, { Component } from 'react';

 class SearchBar extends Component {

     constructor(props) {
         super(props);
         this.state = { term: '' };
     }

     onInputChange = (term) => {
        this.setState({ term: term });
        this.props.onSearchTermChanged(term);
     }

     render() {
         return (
             <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
             </div>
        );
     }

 }

 // Controlled component - only ever changes when the STATE changes
 export default SearchBar;