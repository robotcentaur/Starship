import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Container from '../components/Container'
import Portrait from '../components/Portrait'
import ImageList from '../components/ImageList'
import Stats from '../components/Stats'

var imageList = ['mutant_claw.png', ]
var MutationPrime = "Claws"
const Werebeast = ReactDOMServer.renderToString(
  <Container>
    (set: $MutationPrime to "Claws")
    (set: $Damage to $Damage+3)
    (set: $Portrait to '<img src="https://coffeelux.club/uploads/mutant_claw.png" width="180px" height="180px"/>')
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
      You have {MutationPrime}! (link-goto: "Continue", "Jyadon")
    </footer>
  </Container>
)

export default {
  name: 'Werebeast',
  body: Werebeast
}