import React from "react";

import SearchBox from "./SearchBox";
import Item from "./Item";
import SelectedItem from "./SelectedItem";

const Layout = React.createClass({

    getInitialState() {
        return {
            selectedItems: [],
            listToSearch: [
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
            listToShow: [
            ],
            placeholder: 'Search here...'
        };
    },

    componentWillMount() {
        this.setState({ listToShow: this.state.listToSearch });
    },

    addToList(i) {
        let selectedArray = this.state.selectedItems;
        let originalArray = this.state.listToSearch;
        selectedArray.push(originalArray[i]);
        originalArray.splice(i, 1);
        this.setState({ selectedItems: selectedArray, listToSearch: originalArray, });
    },

    deleteFromList(i) {
        let selectedArray = this.state.selectedItems;
        let originalArray = this.state.listToSearch;
        originalArray.push(selectedArray[i]);
        selectedArray.splice(i, 1);
        this.setState({ selectedItems: selectedArray, listToSearch: originalArray, });
    },

    search(val) {
        const originalArray = this.state.listToSearch;
        let matchesArray = [];
        this.state.listToSearch.map(function(item, i) {
            const itemToCompare = item.toLowerCase();
            if(itemToCompare.includes(val)) {
                matchesArray.push(itemToCompare);
                console.log("Matches: ", matchesArray);
            }
        });
        if(matchesArray.length === 0) {
            this.setState({ listToShow: ['No matches'] });
        } else {
            this.setState({ listToShow: matchesArray });
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
                            this.state.listToShow.map(this.eachItem)
                        }
                    </ul>
                </div>
            </div>
        );
    }
});

export default Layout;





















