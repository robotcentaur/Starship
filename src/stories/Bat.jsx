import React from 'react'
import ReactDOMServer from 'react-dom/server'
import CharacterIntro from '../components/CharacterIntro'

const coffeeLux = 'https://coffeelux.club/uploads/'
const Bat = ReactDOMServer.renderToString(
  <CharacterIntro>
    (set: $MutationPrime to "Vampirism")
    (set: $Vampirecheck to true)
    (set: $Portrait to '<img src={coffeeLux + "bat.png"} width="180px" height="180px"/>')
  </CharacterIntro>
)

export default {
  name: 'Bat',
  body: Bat
}
