import {Component} from 'react';

import './employers-add-form.css';

class EmployersAddForm extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            valid: true
        };
    }
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.name.length > 2 && this.state.salary.length > 0){
            this.props.addNew(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: '',
                valid: true
            })
        } else {
            this.setState({
                valid: false
            })
        }
    }

    render() {
        const {name, salary} = this.state;
        let validClassName = 'valid-text';
        if(!this.state.valid) {
            validClassName += ' active';
        }
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
                <span className={validClassName}>Введите больше 3 букв в имя или добавьте зп</span>
            </div>        
        )
    }
}

export default EmployersAddForm;