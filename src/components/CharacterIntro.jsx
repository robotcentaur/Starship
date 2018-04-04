
import React from 'react'
import Container from './Container'
import Stats from './Stats'
import Portrait from './Portrait'

export default class CharacterIntro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const content = this.props.content || 'You have {MutationPrime}! (link-goto: "Continue", "Jyadon")'
    // should be "Continue" to "Jyadon"
    const navigation = this.props.navigation || '(link-goto: "Jyadon")'
    return (
      <Container>
        { this.props.children }
        <Stats>
          <p>
            (print: "ATHLETICS=") (print: $Athletics)
            (print: "BRAINS=") (print: $Brains)
            (print: "CHARM=") (print: $Charm)
            (print: "DURABILITY=") (print: $Durability)
          </p>
        </Stats>
        <Portrait >
          $Portrait
        </Portrait >
        <footer class="footer">
          { content }
          { navigation }
        </footer>
      </Container>
    );
  }
}
