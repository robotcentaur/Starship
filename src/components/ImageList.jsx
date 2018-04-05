
import React from 'react'

var IMG_URL = 'https://coffeelux.club/uploads/'

export default class Portait extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        { this.props.list.map((race) => 
            <div>
              <img src={IMG_URL + race.image} width="12%" />
              --> (link-goto: "{race.name}")
            </div>
          )
        }
      </div>
    );
  }
}
