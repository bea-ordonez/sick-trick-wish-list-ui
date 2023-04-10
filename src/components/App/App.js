import { Component } from 'react';
import './App.css';
import getTricks from '../Apicalls'
import Tricks from '../Tricks/Tricks'
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: []
    }
  }

  componentDidMount() {
    getTricks()
    .then(data => this.setState({tricks : data}))
  }

  addTrick = (newTrick) => {
    this.setState({tricks: [...this.state.tricks, newTrick]})
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick}/>
        <Tricks tricks={this.state.tricks} />
      </div>
    );
  }
}

export default App;