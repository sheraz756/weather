import React,{useState}from 'react'
import axiox from  'axios'

const Login = () => {
const [email,setemail] =useState('')
const [password,setpasword] = useState('')
const login = async()=>{
    const res = await axiox.post('http://localhost:5000/api/user/login',{email,password})
    console.log(res)
}
console.log(email,password)
  return (
    <>
    
    <input type="text" className='inpu1' name='email' placeholder='email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
    <input type="password" className='inpu1' name='email' placeholder='password' value={password} onChange={(e)=>{setpasword(e.target.value)}}/>
    <button onClick={login}>login please</button>
    </>
  )
}

export default Login