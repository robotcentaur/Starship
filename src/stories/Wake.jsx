
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Container from '../components/Container'

const Wake = ReactDOMServer.renderToString(
  <Container>
    There once was fellow that looked like a marshmellow (link-goto: "Next", "Werebeast")
  </Container>
)

export default {
  name: 'Wake',
  body: Wake
}