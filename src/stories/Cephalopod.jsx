import React from 'react'
import ReactDOMServer from 'react-dom/server'
import CharacterIntro from '../components/CharacterIntro'

const coffeeLux = 'https://coffeelux.club/uploads/'
const Cephalopod = ReactDOMServer.renderToString(
  <CharacterIntro
    navigation= '(link-goto: "Continue", "Jyadon")'
    >
    (set: $MutationPrime to "Tentacles")
    (set: $Portrait to '<img src={coffeeLux + "mutant_tent.png"} width="180px" height="180px"/>')
  </CharacterIntro>
)

export default {
  name: 'Cephalopod',
  body: Cephalopod
}
