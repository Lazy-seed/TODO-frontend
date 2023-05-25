import React, { useState } from 'react'
import './login.scss'

export default function Login() {
    const [showLoginForm, setshowLoginForm] = useState(false);

    const [email, setemail] = useState()
    const [pass, setpass] = useState()
    const [cpass, setcpass] = useState()

    function handleCLick(e) {
        setshowLoginForm(!showLoginForm);
        setemail('');
        setpass('');
        setcpass('');
    }


    return (<>
        {showLoginForm === true ? <div className='login'>
            <div className="container-bg">
                <div className="box">
                    <h2>LOGIN</h2>
                    <div className="input">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='xyz@gmail.com' onChange={(e)=>{setemail(e.target.value)}}/>
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder=' x x x x x x' onChange={(e)=>{setpass(e.target.value)}}/>
                    </div>
                    <button>LOGIN</button>
                    <h4 onClick={handleCLick}>Don`t have account ? create new</h4>
                </div>
            </div>
        </div>
            :
            <div className='signup'>
                <div className="container-bg">
                    <div className="box">
                        <h2>SIGNUP</h2>
                        <div className="input">
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='xyz@gmail.com' onChange={(e)=>{setemail(e.target.value)}}/>
                            <label htmlFor="">Password</label>
                            <input type="text" placeholder=' x x x x x x' onChange={(e)=>{setpass(e.target.value)}}/>
                            <label htmlFor="">Confirm Password</label>
                            <input type="text" placeholder=' x x x x x x' onChange={(e)=>{setcpass(e.target.value)}}/>
                        </div>
                        <button>Submit</button>
                        <h4 onClick={handleCLick}>Already have na account ? Login</h4>
                    </div>
                </div>
            </div>
        }
    </>
    )
}
