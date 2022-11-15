import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ValueAnswer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }
  render() {
    return <span onClick={() => this.countUp()}>{this.props.value}</span>
  }
  countUp() {
    let next = this.state.value + 1
    this.setState({value:next})
  }
}

class ValueInput extends React.Component {
  render() {
    return <input type="text" value={this.props.value} />
  }
}

const element = (
  <div>
    <ValueInput value="4" /> + <ValueInput value="8" /> = <ValueAnswer value="0" />
  </div>
);
ReactDOM.render(element, document.getElementById('root'))