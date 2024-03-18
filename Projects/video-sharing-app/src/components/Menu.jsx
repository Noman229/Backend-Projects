import React from 'react'
import styled from 'styled-components'
import TubeLogo from './img/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieIcon from '@mui/icons-material/Movie';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
// import SignIn from '../pages/SignIn';


const Container = styled.div`
    flex: 1;
    background-color: ${({theme}) => theme.bgLighter};
    height: 100vh;
    color: ${({theme}) => theme.text};
    font-size: 14px;
    position: sticky;
    top: 0;
`
const Wrapper = styled.div`
    padding: 18px 26px;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
    cursor: pointer;
    color: ${({theme}) => theme.text};
`
const Img = styled.img`
    height: 25px
`

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 5px;
    border-radius: 5px;

    &:hover{
        background-color: ${({theme}) => theme.soft};
    }
`
const HR =  styled.hr`
    margin: 15px 0;
    border: 0.5px solid ${({theme}) => theme.soft};
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
    color: #3ea6ff;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
`

const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
        <Wrapper>
            <Link to="/" style={{textDecoration:"none"}}>
                <Logo>
                    <Img src={TubeLogo}/>
                    YouTube 
                </Logo>
            </Link>
            <Item>
                <HomeIcon />
                Home
            </Item>
            <Item>
                <ExploreIcon />
                Explore
            </Item>
            <Item>
                <SubscriptionsIcon />
                Subscriptions
            </Item>
            <HR /> 
            <Item>
                <VideoLibraryIcon />
                Library
            </Item>
            <Item>
                <HistoryIcon />
                History
            </Item>
            <HR />
            <Login>
                Sign in to like videos, comment, and subscribe.
                <Link to="/signin" style={{textDecoration:"none"}}>
                    <LoginBtn><AccountCircleIcon/>Sign in</LoginBtn>
                </Link>
            </Login>
            <HR />
            <Item>
                <LibraryMusicIcon />
                Music
            </Item>
            <Item>
                <SportsBasketballIcon />
                Sports
            </Item>
            <Item>
                <SportsEsportsIcon />
                Gaming
            </Item>
            <Item>
                <MovieIcon />
                Moives
            </Item>
            <Item>
                <NewspaperIcon />
                News
            </Item>
            <Item>
                <LiveTvIcon />
                Live
            </Item>
            <HR />
            <Item>
                <SettingsIcon />
                Settings
            </Item>
            <Item>
                <FlagIcon />
                Report
            </Item>
            <Item>
                <HelpOutlineIcon />
                Help
            </Item>
            <Item onClick={() => setDarkMode(!darkMode)}>
                <LightModeIcon />
                {darkMode ? 'Light' : 'Dark'} Mode
            </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu