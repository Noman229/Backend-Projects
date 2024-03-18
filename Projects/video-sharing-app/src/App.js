import './App.css';
import styled, { ThemeProvider } from 'styled-components'
import {darkTheme , lightTheme} from './utils/Theme'
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Home from './pages/Home'
import Video from './pages/Video'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SignIn from './pages/SignIn';

const Container = styled.div`
  display: flex;
`
const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.bg};
`
const Wrapper = styled.div`
  padding: 50px;
`

function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/signin' element={<SignIn />} />
                <Route exact path='/video/:id' element={<Video />} />
            </Routes>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  )
}

export default App;
