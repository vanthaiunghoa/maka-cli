<% if (client === 'react') { %>import React, { Component } from 'react';<% } else { %>
import React from 'react';
import { Component } from 'reflux';<% } %>

interface <%= className %>Component { state: any, props: any }
class <%= className %>Component extends Component<<%= className %>Component> {
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

  render() { return (<div>{ this.props.children }</div>); }
}

const <%= className %> = <%= className %>Component;
export { <%= className %> };
