import React from 'react'
import ReactDOMServer from 'react-dom/server'
import CharacterIntro from '../components/CharacterIntro'

const Jyadon = ReactDOMServer.renderToString(
  <CharacterIntro
    content='The steel vault closes behind you. Metallic and chemical odors are replaced by organic dirt, pollen, and animal smells.  You are new to this world, but your mind is filled with ideas, images, and concepts: A tutorial of what it means to be a thing called "human" and how to eat, shelter, and survive.  A man stands in front of you, and you know what seperates you is the thing called age.  He must be listened to for having lived so long.'
    navigation='(link-goto: "Listen")'
  >
  </CharacterIntro>
)

export default {
  name: 'Jyadon',
  body: Jyadon
}
