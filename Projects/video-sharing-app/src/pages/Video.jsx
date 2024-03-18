import React from 'react'
import styled from 'styled-components'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ReplyIcon from '@mui/icons-material/Reply';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Comment from '../components/Comments';
import Card from '../components/Card';

const Container = styled.div`
  display: flex;
  gap: 20px;
`
const Content = styled.div`
  flex: 5;
`
const Recommendations = styled.div`
flex: 2;
`
const VideoWrapper = styled.div``
const Title = styled.div`
  font-size: 2rem;
  line-height: 2.8rem;
  font-weight: 700;
  overflow: hidden;
  margin: 15px 0;
  display: block;
  color: ${({theme}) => theme.text};
`
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Info = styled.span`
color: ${({theme}) => theme.textSoft};
`
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({theme}) => theme.text};
`
const Button = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  border: 1px solid #eee;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
`
const HR = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({theme}) => theme.soft};
`
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`

const ChannelInfo = styled.div`
  display: flex;
  gap: 10px;
`

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.text};
`

const ChannelName = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
`

const ChannelCounter = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${({theme}) => theme.textSoft};
`

const ChannelDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
`

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: #fff;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe 
            width="100%" 
            height="550" 
            src="https://www.youtube.com/embed/yIaXoop8gl4?si=KUNTutrn7RJ5yjnP" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </VideoWrapper>
        <Title>React Video Sharing App UI Design | Youtube UI Clone with React</Title>
        <Details>
          <Info>660,80 views | 1 day ago</Info>
          <Buttons>
            <Button>
              <ThumbUpIcon />
              12k
            </Button>
            <Button>
              <ThumbDownIcon />
              114
            </Button>
            <Button>
              <ReplyIcon />
              Share
            </Button>
            <Button>
              <AddTaskIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <HR />
        <Channel>
          <ChannelInfo>
            <Img src='https://yt3.ggpht.com/ytc/AIdro_kxeUEoGzFfBvReC8C5ui5Tkxd4FgRuJBsKb8Q9=s48-c-k-c0x00ffffff-no-rj'/>
            <ChannelDetails>
              <ChannelName>Lama Dev</ChannelName>
              <ChannelCounter>200k Subscribers</ChannelCounter>
              <ChannelDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</ChannelDescription>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <HR />
        <Comment />
      </Content>
      <Recommendations>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendations>
    </Container>
  )
}

export default Video