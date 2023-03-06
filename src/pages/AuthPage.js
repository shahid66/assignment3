import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setToken, setUserDetails } from '../helper/SessionHelper'
import Bannar from '../images/banner.jpeg'
import { setLogin, setLoginApi } from '../state/cartSlice'



const AuthPage = () => {
    
    const dispatch=useDispatch()
const navigate=useNavigate()
    const[isSignup,setIsSignup]=useState(false)
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const handleLogin= async(event)=>{
       if(email && password){
        const login= await axios.post(`http://localhost:5000/api/v1/auth/login`,{email,password})
        console.log(login)
        dispatch(setLoginApi({token:login.data.token,user:login.data.data}))
        dispatch(setLogin())
        
        setToken(login.data.token);
            setUserDetails(login.data.data)
        navigate('/')
       }else{

       }
        
    }
    useEffect(()=>{
        
    },[])
    
  return (
    <div className='home' style={{backgroundImage:`url(${Bannar})`}}>
    
        <form>
            <Box  display={'flex'} width={'400px'} padding={5} borderRadius={5}  flexDirection="column" alignItems={'center'} justifyContent="center" margin={'auto'} marginTop={5}
            sx={{background:'white',color:"black",
            }}>
                <Typography variant='h3' padding={3} textAlign="center">{isSignup ?"Register":" Login"}</Typography>
               {isSignup && <TextField sx={{bgcolor:"white", border:"none", borderRadius:"5px"}} margin='normal' type={'text'} placeholder='Enter Your Name' variant='outlined'/>}
                <TextField sx={{bgcolor:"white", border:"none", borderRadius:"5px"}} margin='normal' type={'email'} placeholder='Enter Your Email' variant='outlined' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <TextField sx={{bgcolor:"white", border:"none", borderRadius:"5px"}} margin='normal' type={'password'} placeholder='Enter Your Password' variant='outlined' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                {!isSignup && <Button sx={{ marginTop:3}} variant='contained' color='warning' onClick={handleLogin}>Login</Button>}
                {isSignup &&  <Button sx={{ marginTop:3}} variant='contained' color='warning'>Register</Button>}
                <Button sx={{ marginTop:3}} onClick={()=>setIsSignup(!isSignup)} >Change To {isSignup ? "Login":"SignUp"}</Button>
            </Box>
        </form>
    
    </div>
  )
}

export default AuthPage