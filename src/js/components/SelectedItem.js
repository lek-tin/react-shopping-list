import React from "react";

const SelectedItem = React.createClass({

    deleteItem() {
        console.log(this.props.index);
        this.props.deleteFromList(this.props.index);
    },

    render() {
        return (
        	<span ref="item" class="chip">{ this.props.value }<i onClick={ this.deleteItem} class="close material-icons">close</i>
            </span>
        );
    }

});

export default SelectedItem;