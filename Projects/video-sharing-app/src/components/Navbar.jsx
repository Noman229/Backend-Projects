import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';


const Container = styled.div`
  background-color: ${({theme}) => theme.bgLighter};
  position: sticky;
  top: 0;
  height: 56px;
`
const Wrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 20px;
  position: relative;
`
const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #eee;
  border-radius: 3px;
`
const Input = styled.input`
  border: none;
  background-color: transparent;
`
const Login = styled.div``
const LoginBtn = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: ${({theme}) => theme.text};
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search' />
          <SearchIcon />
        </Search>
        <Login>
          <Link to="/signin" style={{textDecoration:"none"}}>
            <LoginBtn>
              <AccountCircleIcon/> Sign in
            </LoginBtn>
          </Link>
        </Login>
      </Wrapper>
    </Container>
  )
}

export default Navbar