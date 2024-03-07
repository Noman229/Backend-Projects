import './login.css'

const Login = () => {
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
                        <input type="email" className='loginInput' placeholder='Enter Email' />
                        <input type="password" className='loginInput' placeholder='Enter Password' />
                        <button className='loginBtn'>Login</button>
                        <button className='loginRegisterBtn'>Create a New Account</button>
                        <span className='forgotPassword'>Forgot Password?</span>
                    </div>
                </div>
            </div>   
        </div>
    </>
  )
}

export default Login