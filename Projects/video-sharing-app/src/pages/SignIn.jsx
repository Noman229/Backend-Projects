import React from 'react'
import styled from 'styled-components'

const Container =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 156px);
    color: ${({theme}) => theme.text};
`
const Wrapper =  styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({theme}) => theme.bgLighter};
    border: 1px solid ${({theme}) => theme.soft};
    padding: 20px 50px;
    gap: 10px;
`
const Title =  styled.h1`
    font-size: 24px;
    margin: 0 0 10px 0;
`

const SubTitle =  styled.h2`
    font-size: 18px;
    font-weight: 300;
    margin: 0 0 10px 0;
`

const Input =  styled.input`
    width: 100%;
    background-color:transparent;
    border: 1px solid ${({theme}) => theme.soft};
    padding: 10px;
    border-radius: 5px;
    color: ${({theme}) => theme.text};
`

const Button =  styled.button`
    background-color: ${({theme}) => theme.bgLighter};
    border: 1px solid ${({theme}) => theme.text};
    color: ${({theme}) => theme.text};
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
`
const HR = styled.hr`
    width: 100%;
    margin: 10px 0;
    border: 0.5px solid ${({theme}) => theme.soft};
`

const More =  styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 290px;
    margin-top: 10px;
    font-size: 14px;
    color: ${({theme}) => theme.text};
`

const Links =  styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;
`

const Link =  styled.span`
    font-size: 12px;
    color: ${({theme}) => theme.text};

`

const SignIn = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SignIn</Title>
            <SubTitle>to continue to LamaTube</SubTitle>
            <Input placeholder='Username' type='text' />
            <Input placeholder='Password' type='password' />
            <Button>Sign In</Button>
            <HR/>
            <Title>SignIn</Title>
            <Input placeholder='Username' type='text' />
            <Input placeholder='Email' type='Email' />
            <Input placeholder='Password' type='password' />
            <Button>Sign Up</Button>
        </Wrapper>
        <More>
            English (USA)
            <Links>
                <Link>Help</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>
            </Links>
        </More>
    </Container>
  )
}

export default SignIn
