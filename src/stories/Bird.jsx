import React from 'react'
import ReactDOMServer from 'react-dom/server'
import CharacterIntro from '../components/CharacterIntro'

const coffeeLux = 'https://coffeelux.club/uploads/'
const Bird = ReactDOMServer.renderToString(
  <CharacterIntro
    navigation= '(link-goto: "Continue", "Jyadon")'
    >
    (set: $MutationPrime to "Wings")
    (set: $Evasioncheck to true)
    (set: $Portrait to '<img src={coffeeLux + 'bird.png'} width="180px" height="180px"/>')
  </CharacterIntro>
)

export default {
  name: 'Bird',
  body: Bird
}
