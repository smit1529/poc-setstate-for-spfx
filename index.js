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
    // console.log(temp);

    this.setState(
      { data: temp }
    )

    // var temp = this.state.data;
    // temp.push(1)
    // this.setState(
    //   { data: temp }
    // )
  }

  componentDidUpdate() {
    console.log('componentDidUpdate Fired');

    // var temp = this.state.data;
    // this.setState( { data: temp } )
  }

  clickButton() {
    console.log('clicked');

    var i, temp = [];
    var temp = this.state.data;
    // temp.push(temp.length);
    for (i = 1; i <= 5; i++) {
      temp.push(temp.length);
    }
    this.setState(
      { data: temp }
    )
  }

  render() {
    console.log('render');

    return (
      <div>
        <Hello name={this.state.name} />

        {this.state.data.map((item) => {
          MapFunctionCounter = MapFunctionCounter + 1;

          return (
            <table>
              <tbody>
                <tr>
                  <td style={{ border: "1px solid green" }}>
                    {"_" + item + "_"}
                  </td>
                </tr>
              </tbody>
            </table>
          );
        })}

        <p>
          <input type="button" value="Submit" onClick={() => this.clickButton()} />
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
