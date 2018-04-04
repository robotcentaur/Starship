
import React from 'react'

var IMG_URL = 'https://coffeelux.club/uploads/'

export default class Portait extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside class="aside aside-1">
        {this.props.children}
      </aside>
    );
  }
}
