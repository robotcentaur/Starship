import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Container from '../components/Container'
import Portrait from '../components/Portrait'
import ImageList from '../components/ImageList'
import Stats from '../components/Stats'
import CharacterIntro from '../components/CharacterIntro'

var MutationPrime = "Claws"
const getImage = (imageName) => { return `'<img src="https://coffeelux.club/uploads/${imageName}" width="180px" height="180px"/>')`}
const Werebeast = ReactDOMServer.renderToString(
  <CharacterIntro>
    (set: $MutationPrime to "Claws")
    (set: $Damage to $Damage+3)
    (set: $Portrait to {getImage('mutant_claw.png')}
  </CharacterIntro>
)

export default {
  name: 'Werebeast',
  body: Werebeast
}