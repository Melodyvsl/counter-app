import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    const { counters, onDelete, onIncrement, onReset } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id} //this is internally in react and we cant access it
            onDelete={onDelete} //handle event and counter raising this event with props
            onIncrement={onIncrement}
            counter={counter} // in hamon value: { counter.value} va id: {counter.id} hast ama injori neveshtim chon age be counter ye property ezafe konim baz bayad buaym benevisim...messy mishe pas kolan injori minevisim
          />
        ))}
      </div>
    );
  }
}

export default Counters;
