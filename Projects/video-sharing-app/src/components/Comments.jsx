import React from 'react'
import styled from 'styled-components'
import Comment from '../components/Comment'

const Container = styled.div``

const NewComment = styled.div`
    display: flex;
    gap: 20px;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const Input = styled.input`
    width: 100%;
    background-color: transparent;
    border: none; 
    border-bottom: 1px solid ${({theme}) => theme.soft};
    outline: none;
    padding: 5px;
    color: ${({theme}) => theme.text};
`

const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src="https://yt3.ggpht.com/ytc/AIdro_kxeUEoGzFfBvReC8C5ui5Tkxd4FgRuJBsKb8Q9=s48-c-k-c0x00ffffff-no-rj" alt='Avatar' />
                <Input placeholder="Add a comment..." />
        </NewComment>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </Container>
  )
}

export default Comments