import { Component } from 'react';
import './App.css';
import getTricks from '../Apicalls'
import Tricks from '../Tricks/Tricks'

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: ['jump', 'bounce']
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Tricks tricks={this.state.tricks} />
      </div>
    );
  }
}

export default App;