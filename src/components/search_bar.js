// this file will contain the compoenent for the search bar
import React, { Component } from 'react';

// classes are 'smart' components
// functions are simple
class SearchBar extends Component {
  // initialization of state
  constructor(props){
    super(props)

    // only time state looks like this
    this.state = { term: '' };
  }


    render() {
      // setState is what is normally used!
      return (
        <div className="search-bar">
          <input
            // controlled component with value
            value = {this.state.term}
            onChange={event => this.onInputChange(event.target.value)}/>
        </div>
      )
    }

    onInputChange(term){
      this.setState({term})
      this.props.onSearchTermChange(term);

    }

}

// index needs a reference for this component so we must export it
export default SearchBar;
