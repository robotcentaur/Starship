
import React from 'react'
import Container from './Container'
import Stats from './Stats'
import Portrait from './Portrait'

export default class CharacterDecision extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const content = this.props.content || 'You have {MutationPrime}! (link-goto: "Continue", "Jyadon")'
    const navigation = this.props.navigation
    const decision = this.props.decision
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
          { decision }
        </Portrait >
        <footer class="footer">
          { content }
          { navigation }
        </footer>
      </Container>
    );
  }
}
