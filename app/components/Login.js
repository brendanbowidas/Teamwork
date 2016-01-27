import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      api_key: ''
    }
  }
  _onInputChange(e) {
    this.setState({
      url: this.refs.urlInput.value,
      api_key: this.refs.apiInput.value
    });
  }
  render() {
    return(
      <div>
        <form>
          <input type="text"
            ref="urlInput"
            value={this.state.url}
            onChange={(e) => this._onInputChange(e)}
            placeholder="your teamwork url"
            />
          <input type="text"
            ref="apiInput"
            value={this.state.api_key}
            onChange={(e) => this._onInputChange(e)}
            placeholder="your API key"
            />
          <button type="submit">Submit</button>
        </form>
        {this.state.url}<br />
        {this.state.api_key}
      </div>
    );
  }
}
