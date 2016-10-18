import React from "react";

const SearchBox = React.createClass({
	
	handleOnChange() {
		this.props.search(this.refs.searchInput.value);
	},

    render() {
        return (
        	<input ref='searchInput' 
        		   onChange={ this.handleOnChange } 
        		   placeholder={ this.props.placeholder } 
        	/>
        );
    }

});

export default SearchBox;