import './register.css'

const Register = () => {
  return (
    <>
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <div className="siteLogo">
                        <h1>Lamasocial</h1>
                    </div>
                    <div className="loginDesc">Connect with friends and the world around you on Lamasocial.</div>
                </div>
                <div className="loginRight">
                    <div className="loginForm">
                        <input type="text" className='loginInput' placeholder='Username' />
                        <input type="email" className='loginInput' placeholder='Email' />
                        <input type="password" className='loginInput' placeholder='Password' />
                        <input type="password" className='loginInput' placeholder='Confrim Password' />
                        <button className='loginBtn'>SIgn Up</button>
                        <button className='loginRegisterBtn'>Login into Account</button>
                    </div>
                </div>
            </div>   
        </div>
    </>
  )
}

export default Register