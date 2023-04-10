import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            stance: '',
            name: '',
            obstacle: '',
            tutorial: ''
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <form>
                <input
                  type='text'
                  placeholder='Stance'
                  name='stance'
                  value={this.state.stance}
                  onChange={event => this.handleChange(event)}
                />

                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  value={this.state.name}
                  onChange={event => this.handleChange(event)}
                />

                <input
                  type='text'
                  placeholder='Obstacle'
                  name='obstacle'
                  value={this.state.obstacle}
                  onChange={event => this.handleChange(event)}
                />

                <input
                  type='text'
                  placeholder='Tutorial'
                  name='tutorial'
                  value={this.state.tutorial}
                  onChange={event => this.handleChange(event)}
                />

                <button>SEND IT</button>
            </form>
        )
    }
}


export default Form;