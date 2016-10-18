import React from "react";

const Item = React.createClass({
	
	getInitialState() {
		return { isActive: false };
	},

	toggleActiveClass() {
		this.setState({ isActive: !this.state.isActive });
	},

	addItem() {
		this.props.addToList(this.props.index);
	},

    render() {
        return ( 
        	<li onMouseEnter={ this.toggleActiveClass }
        		onMouseLeave={ this.toggleActiveClass }
        		onClick={ this.addItem }
                class={ this.state.isActive === true ? 'collection-item active' : 'collection-item' }
                ref="item">
                { this.props.value }
            </li>
        );
    }

});

export default Item;