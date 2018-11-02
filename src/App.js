import React, { Component } from 'react';
import './App.css';
import styled, {keyframes, ThemeProvider} from 'styled-components'

const Outer = styled.div`
  text-align: center;
`
const spin = keyframes`
from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`

const Header = styled.div`
  background-color: ${ props => props.theme.bg || 'black'};
  min-height: 30vh;
  padding: 20px;
  >h2 {
    color: ${props => props.theme.fg || 'white'};
    font-size: ${props => props.theme.sz || '30px'};
    font-family: 'Courier New', Courier, monospace
  }
`
const Image = styled.img`
  animation: ${spin} infinite 20s linear;
  ${props => props.backwards && 'animation-direction: reverse;'}
  height: 40vmin;
  border-radius: 200px;
`

class App extends Component {
  render() {
    return (
      <Outer>
        <Header>
          <Image src="https://i.imgur.com/2qp4xeg.jpg" />
          <Image backwards src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/9058/GA_Cog_Large_Red_RGB.png" />
          <p>Second image is given props for backwards animation direction</p>
          <h2>
            This H2 is styled inside Header component
          </h2>
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=qu4U7lwZTRI"
            target="_blank"
            rel="noopener noreferrer"
          >
            Styled Components Tutorial
          </a>
        </Header>
        <ThemeProvider theme={{
            fg: 'blue',
            bg: 'papayawhip'
        }}>
        <Header>
          <h2>
            Foreground and background passed through ThemeProvider
          </h2>
        </Header>
        </ThemeProvider>
        <h2>H2 outside of header</h2>
        
      </Outer>
    );
  }
}

export default App;
