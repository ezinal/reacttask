import React, { Component } from 'react';
import './App.css';
const https = require('https');

class App extends Component {
    state = {cities : ""};
    getData = () => {
        let getCities = '';
        https.get('https://jsonplaceholder.typicode.com/users', (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                for (let i = 0; i < JSON.parse(data).length; i++)
                    getCities += JSON.parse(data)[i].address.city + '\n';
                console.log(getCities);
            });
        });
        this.setState({cities : getCities});
    };
  render() {
      let test = "All users data:";
      return <div className="App">
          <header className="App-header">
              <p>
                  {test}
              </p>
              <div>
                  {this.state.cities}
              </div>
              <div>
                  <button onClick={this.getData()}>Print Users</button>
              </div>
          </header>
      </div>;
  }
}

export default App;
