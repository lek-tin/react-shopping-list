import React from "react";

import SearchBox from "./SearchBox";
import Item from "./Item";
import SelectedItem from "./SelectedItem";

const Layout = React.createClass({

    getInitialState() {
        return {
            selectedItems: [],
            list: [
                'Apples',
                'Avocados',
                'Bananas',
                'Berries',
                'Cherries',
                'Grapefruit',
                'Grapes',
                'Kiwis',
                'Lemons',
                'Melon',
                'Oranges',
                'Peaches',
                'Nectarines',
                'Pears',
                'Plums',
                'Asparagus',
                'Broccoli',
                'Carrots',
                'Cauliflower',
                'Celery',
                'Corn',
                'Cucumbers',
                'Lettuce',
                'Mushrooms',
                'Onions',
                'Peppers',
                'Potatoes',
                'Spinach',
                'Squash',
                'Zucchini',
                'Tomatoes'
            ],
            searchResults: [
            ],
            placeholder: 'Search here...'
        };
    },

    addToList(i) {
        let selectedArray = this.state.selectedItems;
        let originalArray = this.state.list;
        selectedArray.push(originalArray[i]);
        originalArray.splice(i, 1);
        this.setState({selectedItems: selectedArray, list: originalArray, })
    },

    deleteFromList(i) {
        let selectedArray = this.state.selectedItems;
        let originalArray = this.state.list;
        originalArray.push(selectedArray[i]);
        selectedArray.splice(i, 1);
        this.setState({selectedItems: selectedArray, list: originalArray, })
    },

    search(val) {
        if( this.state.list.indexOf(val) !== -1) {
            console.log('There it is');   
        }
    },

    eachSelectedItem(text, i) {
        return (
            <SelectedItem key={i} index={i} value={ text } deleteFromList={ this.deleteFromList } />
        )
    },

    eachItem(text, i) {
        return (
            <Item key={i} index={i} value={ text } addToList={ this.addToList } />
        )
    },

    render() {
        return ( 
            <div class="main-container">
                <div>
                    <h3>Shopping List</h3>
                </div>
                <div>
                    <SearchBox search={ this.search } placeholder={ this.state.placeholder } />
                </div>
                <div>
                    {
                        this.state.selectedItems.map(this.eachSelectedItem)
                    }
                </div>
                <div>
                    <ul class="collection">
                        {   
                            this.state.list.map(this.eachItem)
                        }
                    </ul>
                </div>
            </div>
        );
    }
});

export default Layout;





















