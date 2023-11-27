import { Component } from 'react';

import './employers-list-item.css'

class EmployersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            promotion: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onPromotion = () => {
        this.setState(({promotion}) => ({
            promotion: !promotion
        }))
    }

    render() {
        const {name, salary, onDelete, onToggleIncrease, onTogglePromotion} = this.props;
        const {increase, promotion} = this.state;

        let className = "list-group-item d-flex justify-content-between";
        if (increase) {
            className += ' increase';
        }
        if (promotion) {
            className += ' like';
        }

        return (
            <li className={className}>
                <span className="list-group-item-label" onClick={onTogglePromotion}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>        
        )
    }

}

export default EmployersListItem;