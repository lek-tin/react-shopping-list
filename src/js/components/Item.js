import React from "react";

const Item = React.createClass({
	
	getInitialState() {
		return { onHover: false };
	},

	toggleActiveClass() {
		this.setState({ onHover: !this.state.onHover });
	},

	addItem() {
		console.log(this.props.index);
		this.props.addToList(this.props.index);
	},

    render() {
        return ( 
        	<li onMouseOver={ this.toggleActiveClass }
        		onMouseOut={ this.toggleActiveClass }
        		onClick={ this.addItem }
                class={ this.state.onHover === true ? 'collection-item active' : 'collection-item' }
                ref="item">
                <span>{ this.props.index }. </span>
                { this.props.value }
            </li>
        );
    }

});

export default Item;