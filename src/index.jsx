
import React from 'react'
import fs from 'fs'
import path from 'path'


import Wake from './stories/Wake'
import Insect from './stories/Insect'
import Bat from './stories/Bat'
import Werebeast from './stories/Werebeast'
import Profession from './stories/Profession'
import Listen from './stories/Listen'
import Jyadon from './stories/Jyadon'

var stories = [Wake, Werebeast, Insect, Bat,
               Profession, Listen, Jyadon ]

stories.forEach((story) => {

  var name = story.name

  var reactComponent = story.body.replace(/&quot;/g, '"')
  var stringToWrite = `:: ${name}\n` + reactComponent

  var file_path = path.resolve(process.cwd(), 'build', name + '.tw')
  // if(!fs.exists(file_path))
  //   fs.openSync(file_path, 'w');
  fs.writeFile(file_path, stringToWrite, (err)=> {
    if(err)
      console.log(err)
    
      console.log(`${name} saved`)
  })
})