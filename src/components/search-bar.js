/**
 * Created by reube on 24/07/2017.
 */
 import React, { Component } from 'react';

 class SearchBar extends Component {

     constructor(props) {
         super(props);
         this.state = { term: '' };
     }

     onInputChange = (event) => {
        this.setState({ term: event.target.value });
     }

     render() {
         return (
             <div>
                <input
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)}
                />
             </div>
        );
     }

 }

 // Controlled component - only ever changes when the STATE changes
 export default SearchBar;