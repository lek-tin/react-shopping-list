import React from "react";
import _ from "lodash";
import SearchBox from "./SearchBox";
import Item from "./Item";
import SelectedItem from "./SelectedItem";

const Layout = React.createClass({

    getInitialState() {
        const list = [
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
                    'Tomatoes',
                    'Apples',
                    'Avocados',
                    'Bananas',
                    'Berries',
                    'Cherries',
                    'Grapefruit',
                    'Grapes',
                    'Kiwis',
                    'Lemons',
                    'Limes',
                    'Melon',
                    'Oranges',
                    'Peaches',
                    'Nectarines',
                    'Pears',
                    'Plums',
                    'Bagels',
                    'Chip dip',
                    'English muffins',
                    'Eggs',
                    'Fruit juice',
                    'Hummus',
                    'Ready-bake breads',
                    'Tofu',
                    'Tortillas',
                    'Burritos',
                    'Fish sticks',
                    'Ice cream',
                    'Sorbet',
                    'Juice concentrate',
                    'Pizza',
                    'Popsicles',
                    'Fries',
                    'TV dinners',
                    'Vegetables',
                    'Veggie burgers'
                ];
        let indexedObj = new Object();
        list.map(function(value, index) {
            indexedObj[index] = value;
        });
        return {
            selectedItems: {},
            listToSearch: indexedObj,
            listToShow: indexedObj,
            listLength: list.length,
            placeholder: 'Search here...'
        };
    },

    componentWillMount() {

    },

    addToList(i) {
        let selectedObj = this.state.selectedItems;
        let originalObj = this.state.listToSearch;
        // let matchesObj = this.state.listToShow;
        selectedObj[i] = originalObj[i];
        // matchesObj[i] = originalObj[i];
        delete originalObj[i];
        this.setState({ selectedItems: selectedObj,
                        listToSearch: originalObj });
    },

    deleteFromList(i) {
        let selectedObj = this.state.selectedItems;
        let originalObj = this.state.listToSearch;
        // let matchesObj = this.state.listToShow;
        originalObj[i] = selectedObj[i];
        delete selectedObj[i];
        // delete matchesObj[i];
        this.setState({ selectedItems: selectedObj,
                        listToSearch: originalObj });
    },

    search(val) {
        // Convert list to an indexed object
        const originalObj = this.state.listToSearch;
        let matchesObj = {};
        for (let key in this.state.listToSearch) {
            const itemToCompare = this.state.listToSearch[key];
            if(itemToCompare.toLowerCase().includes(val)) {
                matchesObj[key] = itemToCompare;
                console.log("Matches: ", matchesObj);
            }
        };
        if(Object.keys(matchesObj).length === 0) {
            this.setState({ listToShow: { nomatches: "No matches" } });
        } else {
            this.setState({ listToShow: matchesObj });
        }
    },

    eachSelectedItem(text, i) {
        return (
            <SelectedItem key={i} index={i} value={ text }
            deleteFromList={ this.deleteFromList } />
        )
    },

    eachItem(text, i) {
        return (
            <Item key={i} index={i} value={ text } addToList={ this.addToList } />
        )
    },

    render() {

        let selectedListToRender = []; 
        for (const key in this.state.selectedItems) {
            console.log('SELECTED-> ', key, ':', this.state.selectedItems[key]);
            selectedListToRender.push(this.eachSelectedItem(this.state.selectedItems[key], key));
        };

        let listToRender = []; 
        for (const key in this.state.listToShow) {
            console.log('NOT SELECTED-> ', key, ':', this.state.listToShow[key]);
            listToRender.push(this.eachItem(this.state.listToShow[key], key));
        };

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
                        selectedListToRender
                    }
                </div>
                <div>
                    <ul class="collection">
                        {   
                            // JSON.parse(this.state.listToShow, (key, value) => this.eachItem)
                            listToRender
                            // _.forEach(this.state.listToShow, function(value, index) {
                            //     self.eachItem(value, index);
                            //     console.log(value, index);
                            // })

                            // for (let i = 0; i < listLength; i++) {
                            //     this.eachItem(this.state.listToShow[index], index);
                            // }
                            
                            // Object.keys(this.state.listToShow).forEach(function(value, index) {
                            //     console.log(value, ': ', index);
                            //     self.eachItem(value, index);
                            // })
                        }
                    </ul>
                </div>
            </div>
        );
    }
});

export default Layout;





















