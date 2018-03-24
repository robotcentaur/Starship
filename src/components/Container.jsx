
import React from 'react'

export default class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="wrapper">
        <article class="main">
          {this.props.children}
        </article>
      </div>
    );
  }
}
