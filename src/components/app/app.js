import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css'
import { render } from '@testing-library/react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John C.", salary: 800, id: 1},
                {name: "Alex M.", salary: 3000, id: 2},
                {name: "Carl W.", salary: 5000, id: 3},
            ] 
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArr = [...before, ...after];
            
            return {
                data: data.filter(item => item.id !== id)
            }

        })
    }

    addNewItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newData = [...data, newItem];
            return {
                data: newData
            }
        });
    }

    onToggleIncrease = (id) => {
        console.log(`Increase this ${id}`);
    }

    onTogglePromotion = (id) => {
        console.log(`Promotion this ${id}`);
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployersList 
                data={this.state.data}
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onTogglePromotion={this.onTogglePromotion}/>
                <EmployersAddForm addNew={this.addNewItem}/>
            </div>
        );
    }
}

export default App;