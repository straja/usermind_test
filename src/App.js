import React from 'react';
import ChooseDate from './ChooseDate';
import './App.css';

class App extends React.Component {
  state = {
    startDate: new Date('01/07/2019'),
    endDate: new Date('04/07/2019'),
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

  changed() {
    let res = [];
    this.state.data.forEach(row => {
      if(row.date >= this.state.startDate || row.date <= this.state.endDate) {
        res.push(row);
      }
    });
    this.setState({ data: res });
  }

  render() {
    return (
      <div className="App">
        <span>From: </span><ChooseDate changed={() => this.changed()} date={this.state.startDate} />
        <span>To: </span><ChooseDate changed={()=>this.changed()} date={this.state.endDate}/>
        <div className="flexbox">
        <div>
          <span>date</span>
          <span>bananas</span>
          <span>strawberries</span>
          <span>apples</span>
          <span>oranges</span>
        </div>
          {this.state.data.map((row, key) => {
          return (<div key={key} onClick={() => this.findDates(row.date)}>
                    <span>{row.date}</span>
                    <span>{row.bananas}</span>
                    <span>{row.strawberries}</span>
                    <span>{row.apples}</span>
                    <span>{row.oranges}</span>
                  </div>)
          })}
        </div>
      </div>
    );
  }
}

export default App;
