
import React from 'react'
import Container from './Container'
import Stats from './Stats'
import Portrait from './Portrait'

export default class CharacterIntro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const content = this.props.content || 'You have $MutationPrime!\n'
    // should be "Continue" to "Jyadon"
    const navigation = this.props.navigation || '(link-goto: "Continue", "Jyadon")'
    return (
      <Container>
        { this.props.children }
        <Stats>
          <p>
            ATHLETICS= (print: $Athletics) <br/>
            BRAINS= (print: $Brains) <br/>
            CHARM= (print: $Charm) <br/>
            DURABILITY= (print: $Durability) <br/>
          </p>
        </Stats>
        <Portrait >
          { this.props.portrait || '$Portrait' }
        </Portrait >
        <footer class="footer">
          { content }
          { navigation }
        </footer>
      </Container>
    );
  }
}
