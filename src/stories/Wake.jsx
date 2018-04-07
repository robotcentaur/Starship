
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import CharacterIntro from '../components/CharacterIntro'
import ImageList from '../components/ImageList'

const races = [{image:'mutant_tent.png', name: 'Cephalopod'},
               {image:'mutant_claw.png', name: 'Werebeast'},
               {image: 'mutant_turtle.png', name: 'Turtle'}, 
               {image: 'crustacean.png', name: 'Crustacean'} ]
var content = 'Welcome Traveller! You awake in your birth creche'
content +=    ' already a young adult -- android servitors are forcing you outside,' 
content +=    ' but you gaze at the mirrored surface of the chrome chambers and see a'
content +=    ' humanoid....'
 
const Wake = ReactDOMServer.renderToString(
  <CharacterIntro 
    navigation=''
    content={content}
    portrait={<ImageList list={races} />}>

  </CharacterIntro>
)

export default {
  name: 'Wake',
  body: Wake
}