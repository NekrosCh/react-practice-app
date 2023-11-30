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
                {name: "John C.", salary: 800, increase: true, promotion: true, id: 1},
                {name: "Alex M.", salary: 3000, increase: false, promotion: false, id: 2},
                {name: "Carl W.", salary: 5000, increase: false, promotion: false, id: 3},
            ],
            term: '',
            promotion: false,
            bigSalary: false 
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
            promotion: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newData = [...data, newItem];
            return {
                data: newData
            }
        });
    }

    // onToggleIncrease = (id) => {
    //     // this.setState(({data}) => {
    //     //     const index = data.findIndex(elem => elem.id === id);

    //     //     const old = data[index];
    //     //     const newItem = {...old, increase: !old.increase};
    //     //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //     //     return {
    //     //         data: newArr;
    //     //     }
    //     // })
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, increase: !item.increase}
    //             }
    //             return item;
    //         })
    //     }))
    // }

    // onTogglePromotion = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, promotion: !item.promotion}
    //             }
    //             return item;
    //         })
    //     }))
    // }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }
    
    searchEmp = (items, term) => {
        if(term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1 
        })
    }
    filterEmpProm = (items) => {
            return items.filter(item => {
                return item.promotion === true
            })
        }

    filterEmpSal = (items) => {
        return items.filter(item => {
            return item.salary > 1000
        })
    }
    
    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onFilter = (state) => {
        this.setState(state)
    }

    render() {
        const {data, term} = this.state;
        const totalEmployees = this.state.data.length;
        const increase = this.state.data.filter(item => item.increase === true).length;
        let visibleData = this.searchEmp(data, term);
        if (this.state.promotion) {
            visibleData = this.filterEmpProm(visibleData);
        }
        if (this.state.bigSalary) {
            visibleData = this.filterEmpSal(visibleData);
        }
        return (
            <div className="app">
                <AppInfo
                total={totalEmployees}
                increase={increase}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onFilter={this.onFilter}/>
                </div>
    
                <EmployersList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}/>
                <EmployersAddForm addNew={this.addNewItem}/>
            </div>
        );
    }
}

export default App;