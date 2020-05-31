import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    data: [
      {
        date: '01/07/2019',
        bananas: 401,
        strawberries: 58,
        apples: 290,
        oranges: 191
      },
      {
        date: '02/07/2019',
        bananas: 354,
        strawberries: 98,
        apples: 132,
        oranges: 123
      },
      {
        date: '03/07/2019',
        bananas: 512,
        strawberries: 120,
        apples: 321,
        oranges: 159
      },
      {
        date: '04/07/2019',
        bananas: 287,
        strawberries: 75,
        apples: 214,
        oranges: 187
      }
    ]
  }

  findDates(date) {
    let res = [];
    this.state.data.forEach(row => {
      if(row.date == date) {
        res.push(row);
      }
    });
    this.setState({ data: res });
  }

  render() {
    return (
      <div className="App">
        <table>
          {this.state.data.map((row, key) => {
          return (<tr key={key} onClick={() => this.findDates(row.date)}><td>{row.date}</td><td>{row.bananas}</td><td>{row.strawberries}</td><td>{row.apples}</td><td>{row.oranges}</td></tr>)
          })}
        </table>
      </div>
    );
  }
}

export default App;
