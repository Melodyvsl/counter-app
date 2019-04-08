import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';
import Counter from './components/counter';

class App extends Component {
  state = {
    counters: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }],
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters]; //this obj is spread here is the exact obj we have in state
    const index = counters.indexOf(counter); // inja migim counters ke alan sakhtim ro be counters state kar nadashte bash va bar asase index haye counter kar kon
    counters[index] = { ...counter }; // inja engar counters ro copy kardim toye counter ta baraye taghir state asli taghir nakone
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />;
        <main className="container">
          <Counters //inja dge counters be ye controlled component tabdil shod chon dge state nadare va hame chisho az app migire han fn ham state
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
        ;
      </React.Fragment>
    );
  }
}

export default App;
