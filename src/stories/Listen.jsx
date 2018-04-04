import React from 'react'
import ReactDOMServer from 'react-dom/server'
import CharacterIntro from '../components/CharacterIntro'

const Listen = ReactDOMServer.renderToString(
  <CharacterIntro
    content='"Hello child, my name is Jyadon.  Welcome to Terra. It is time to enter the world and contribute to The Wheel. You will become an apprentice to a guildmaster from our tribe. You can choose your part."'
    navigation='(link-goto: "Guild", "Profession)'
  >
  </CharacterIntro>
)

export default {
  name: 'Listen',
  body: Listen
}
