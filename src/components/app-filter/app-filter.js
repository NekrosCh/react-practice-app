import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promotion: false,
      bigSalary: false
    }
  }
  onFilter = (e) => {
    let state;
    if(e.currentTarget.getAttribute('data-toggle') === 'promotion') {
      state = {
        promotion: true,
        bigSalary: false
      }
    }
    if(e.currentTarget.getAttribute('data-toggle') === 'bigSalary') {
      state = {
        promotion: false,
        bigSalary: true
      }
    }
    if(e.currentTarget.getAttribute('data-toggle') === 'all') {
      state = {
        promotion: false,
        bigSalary: false
      }
    }
    this.setState(state)
    this.props.onFilter(state)
  }
  render() {
    return (
      <div className="btn-group">
        <button 
            className="btn btn-light"
            type="button"
            data-toggle="all"
            onClick={this.onFilter}>
                Все сотрудники
        </button>
        <button 
            className="btn btn-outline-light"
            type="button"
            data-toggle="promotion"
            onClick={this.onFilter}>
                На повышение
        </button>
        <button 
            className="btn btn-outline-light"
            type="button"
            data-toggle="bigSalary"
            onClick={this.onFilter}>
                З/П больше 1000$
        </button>
      </div>  
    );
  }
}

export default AppFilter;