import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Container from '../components/Container'
import Portrait from '../components/Portrait'

var MutationPrime = "Claws"
const Werebeast = ReactDOMServer.renderToString(
  <Container>
    <Portrait img='mutant_claw.png'/>
    <footer class="footer">
      You have {MutationPrime}! (link-goto: "Continue", "Jyadon")
    </footer>
  </Container>
)

export default {
  name: 'Werebeast',
  body: Werebeast
}