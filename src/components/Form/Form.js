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

    submitTrick = event => {
        event.preventDefault()
        const newTrick = {id: Date.now(), ...this.state}
        this.props.addTrick(newTrick)   
    }

    render() {
        return (
            <form>
                <select name="stance"
                onChange={event => this.handleChange(event)}>
                    <option value="">Please select stance</option>
                    <option value="regular">Regular</option>
                    <option value="switch">Switch</option>
                </select>

                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  value={this.state.name}
                  onChange={event => this.handleChange(event)}
                />

                <select name="obstacle"
                onChange={event => this.handleChange(event)}
                >
                    <option value="">Please select obstacle</option>
                    <option value="flat ground">Flatground</option>
                    <option value="ledge">Ledge</option>
                    <option value="rail">Rail</option>
                    <option value="stairs">Stairs</option>
                    <option value="pool">Pool</option>
                </select>

                <input
                  type='text'
                  placeholder='Tutorial Link'
                  name='tutorial'
                  value={this.state.tutorial}
                  onChange={event => this.handleChange(event)}
                />

                <button onClick={event => this.submitTrick(event)}>SEND IT</button>
            </form>
        )
    }
}


export default Form;