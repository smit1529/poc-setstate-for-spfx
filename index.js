import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

var MapFunctionCounter = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'POC: React SET State',
      data: []
    };
  }

  componentDidMount() {
    console.log('componentDidMount Fired');

    var i, temp = [];
    for (i = 1; i <= 5; i++) {
      temp.push(i);
    }

    this.setState(
      { data: temp }
    )
  }

  componentDidUpdate() {
    console.log('componentDidUpdate Fired');
  }

  clickButton() {
    console.log('clicked');

    var i, temp = [];
    var temp = this.state.data;
    
    for (i = 1; i <= 5; i++) {
      temp.push(temp.length + 1);
    }
    this.setState(
      { data: temp }
    )
  }

  render() {
    console.log('render');

    return (
      <div>
        <Hello name={this.state.name + " - " + this.state.data.length} />

        <div style={{ overflow: "auto", height: "250px" }}>
          <table>
            <tbody>
              {this.state.data.map((item) => {
                return (
                  <tr>
                    <td style={{ border: "1px solid green" }}>
                      {"_" + item + "_"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p>
          <input type="button" value="Submit" onClick={() => this.clickButton()} />
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
