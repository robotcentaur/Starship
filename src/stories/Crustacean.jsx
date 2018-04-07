import React from 'react'
import ReactDOMServer from 'react-dom/server'
import CharacterIntro from '../components/CharacterIntro'

const coffeeLux = 'https://coffeelux.club/uploads/'
const Crustacean = ReactDOMServer.renderToString(
  <CharacterIntro
    navigation= '(link-goto: "Continue", "Jyadon")'
    >
    (set: $MutationPrime to "Carapace")
    (set: $AC to $AC+3)
    (set: $Portrait to '<img src={coffeeLux + 'crustacean.png'} width="180px" height="180px"/>')
  </CharacterIntro>
)

export default {
  name: 'Crustacean',
  body: Crustacean
}
