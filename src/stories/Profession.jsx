import React from 'react'
import ReactDOMServer from 'react-dom/server'
import CharacterDecision from '../components/CharacterDecision'

const chooseProfession = (initial, job) => { 
  return initial + `(link-goto: "${job}")\n`
}
const decisions = ['\n', 'Beast Master', 'Diplomat', 'Junk Dealer', 'Medicine Man', 'Fixer']
  .reduce(chooseProfession)

const Profession = ReactDOMServer.renderToString(
  <CharacterDecision
    content='You are then told that the next several years of study will prepare you for your future with the tribe, and your place in The Wheel.'
    decision={decisions}
  >
  </CharacterDecision>
)

export default {
  name: 'Profession',
  body: Profession
}
