import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'

function Login() {
    const signIn = () => {
        //do Clever google Login
    }
    return (
        <div className="login">
            
            <div className="login__logo">
                <img src="https://1000logos.net/wp-content/uploads/2020/10/Discord-logo-500x333.png" alt=""/>
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
