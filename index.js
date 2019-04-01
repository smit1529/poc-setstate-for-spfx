import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      data: []
    };
  }

  componentDidMount() {
    console.log('componentDidMount Fired');
    var temp = this.state.data;
    temp.push(1)
    this.setState(
      { data: temp }
    )
    temp.push(-1)
    this.setState(
      { data: temp }
    )
  }

  componentDidUpdate() {
    console.log('componentDidUpdate Fired');

  }

  clickButton() {
    console.log('clciked');
    var temp = this.state.data;
    temp.push(temp.length + 1)
    this.setState(
      { data: temp }
    )
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          <input type="button" value="Submit" onClick={() => this.clickButton()} />
        </p>

        {this.state.data.map((item) => {
          return (
            <p>{item}</p>
          );
        })}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
