<% if (client === 'react') { %>import React, { Component } from 'react';<% } else { %>
import React from 'react';
import { Component } from 'reflux';<% } %>

class <%= className %>Component extends Component {
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {<% if (client === 'reflux' && !isStore) { %>
    super.componentWillMount();<% }%>
  }

  componentDidMount() { }

  componentWillUnmount() {<% if (client === 'reflux' && !isStore) { %>
    super.componentWillUnmount();<% }%>
  }

  componentDidCatch(error, info) { console.log(error, info); }

  render() { return (<div>{ this.props.children }</div>); }
}

const <%= className %> = <%= className %>Component;
export { <%= className %>, <%= className %>Component };
