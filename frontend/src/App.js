import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      angka1: '',
      angka2: '',
      operator: '',
      hasil: '',
      databackend: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/')
      .then(response => {
        this.setState({
          databackend: response.data.Data
        });
        console.log(response.data.Data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChange1(e) {
    e.preventDefault();
    this.setState({
      angka1: e.target.value
    });
  }
  handleChange2(e) {
    e.preventDefault();
    this.setState({
      angka2: e.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      operator: e.target.value
    });
  }

  handleHasil() {
    // e.preventDefault();
    var hasil;
    switch (this.state.operator) {
      case '+':
        hasil = parseInt(this.state.angka1) + parseInt(this.state.angka2);
        break;
      case '-':
        hasil = parseInt(this.state.angka1) - parseInt(this.state.angka2);
        break;
      case '*':
        hasil = parseInt(this.state.angka1) * parseInt(this.state.angka2);
        break;
      case '/':
        hasil = parseInt(this.state.angka1) / parseInt(this.state.angka2);
        break;
    }
    this.setState({
      hasil: hasil
    });
    alert(this.state.hasil);
  }
  render() {
    // console.log(this.state.hasil);
    axios
      .post('http://localhost:3000/', {
        angka1: this.state.angka1,
        angka2: this.state.angka2,
        operator: this.state.operator,
        hasil: this.state.hasil
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    return (
      <div className="App">
        <p>
          <input
            type="number"
            value={this.state.angka1}
            onChange={this.handleChange1.bind(this)}
          />
        </p>
        <p>
          <input
            type="number"
            value={this.state.angka2}
            onChange={this.handleChange2.bind(this)}
          />
        </p>
        <p>
          <input
            type="button"
            value="+"
            onClick={this.handleClick.bind(this)}
          />
          <input
            type="button"
            value="-"
            onClick={this.handleClick.bind(this)}
          />
          <input
            type="button"
            value="*"
            onClick={this.handleClick.bind(this)}
          />
          <input
            type="button"
            value="/"
            onClick={this.handleClick.bind(this)}
          />
        </p>
        <div>
          <button onClick={this.handleHasil.bind(this)}>Hasil :</button>
          <p>{this.state.hasil}</p>
        </div>
        <div>
          <p>Log :</p>
          {this.state.databackend.map((node, index) => (
            <ul key={index}>
              <li>
                {node.angka1 + node.operator + node.angka2 + ' = ' + node.hasil}
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
