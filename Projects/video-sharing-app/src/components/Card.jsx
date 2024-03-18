import React from 'react'
import CardImage from '../components/img/front-view-man-eating-apple.jpg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: ${(props)=>props.type !== "sm" && "360px"};
    margin-bottom: ${(props)=>props.type === "sm" ? "20px" : "22px"};
    cursor: pointer;
    display: ${(props)=>props.type === "sm" && "flex"};
    gap: 10px;
`;
const Image = styled.img`
    width: 100%;
    height: ${(props)=>props.type === "sm" ? "120px" : "202px"};
    object-fit: cover;
    background-color: #999;
    flex: 1;
`

const Details = styled.div`
    display: flex;
    margin-top: ${(props)=>props.type !== "sm" && "16px"};
    gap: 12px;
    flex: 1;
`
const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
    background-color: #999;
    display: ${(props)=>props.type === "sm" && "none"};
`
const Texts = styled.div``
const Title = styled.h2`
    font-size: 16px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
    margin: 0 0 5px 0;
`
const ChannelName = styled.h3`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme}) => theme.textSoft};
    margin: 0 0 5px 0;
`
const Info = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme}) => theme.textSoft};
    margin: 0;
`

const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration:'none'}}>
        <Container type={type} >
            <Image type={type} src={CardImage} />
            <Details type={type}>
                <ChannelImage type={type} src='https://yt3.ggpht.com/ytc/AIdro_kxeUEoGzFfBvReC8C5ui5Tkxd4FgRuJBsKb8Q9=s48-c-k-c0x00ffffff-no-rj'/>
                <Texts>
                    <Title>Test Video</Title>
                    <ChannelName>Lama Dev</ChannelName>
                    <Info>660,80 views | 1 day ago</Info>
                </Texts>
            </Details>
            </Container>
    </Link>
  )
}

export default Card