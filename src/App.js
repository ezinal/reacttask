import React, { Component } from 'react';
import './App.css';
const https = require('https');

class App extends Component {
  render() {
      let cities = '';
      https.get('https://jsonplaceholder.typicode.com/users', (resp) => {
          let data = '';

          // A chunk of data has been received.
          resp.on('data', (chunk) => {
              data += chunk;
          });

          // The whole response has been received. Print out the result.
          resp.on('end', () => {
              for (let i = 0; i < JSON.parse(data).length; i++)
                  cities += JSON.parse(data)[i].address.city + '\n';
              console.log(cities);
          });

      });
      let printing = "All users data:";
      return <div className="App">
          <header className="App-header">
              <p>
                  {printing}
              </p>
              <p>
                  {cities}
              </p>
          </header>
      </div>;
  }
}

export default App;
