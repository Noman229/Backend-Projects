import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({theme}) => theme.text};
`

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    margin-left: 10px;
    color: ${({theme}) => theme.textSoft};
`

const Text = styled.div`
    font-size: 14px;
`

const Comment = () => {
  return (
    <Container>
        <Avatar src="https://yt3.ggpht.com/ytc/AIdro_kxeUEoGzFfBvReC8C5ui5Tkxd4FgRuJBsKb8Q9=s48-c-k-c0x00ffffff-no-rj" alt='Avatar' />
        <Details>
            <Name>Jonh Doe <Date>1 day ago</Date></Name>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
        </Details>
    </Container>
  )
}

export default Comment