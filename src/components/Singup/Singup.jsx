import React,{useState}from 'react'
import axiox from  'axios'

const Singup = () => {
const [email,setemail] =useState('')
const [password,setpasword] = useState('')
const [phone,setphone] = useState('')
const [name,setname] = useState('')
const [field,setfield] = useState('')
const [age,setage] = useState('')
const [experience,setexperience] = useState('')

const login = async()=>{
    const res = await axiox.post('http://localhost:5000/api/user/Signup',{email,password,phone,name,field,age,experience})
    console.log(res)
}
console.log(email,password)
  return (
    <>
    
    <input type="text" className='inpu1' name='email' placeholder='email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
    <input type="password" className='inpu1' name='email' placeholder='password' value={password} onChange={(e)=>{setpasword(e.target.value)}}/>
    <input type="text" className='inpu1' name='email' placeholder='phone' value={phone} onChange={(e)=>{setphone(e.target.value)}}/>
    <input type="text" className='inpu1' name='email' placeholder='name' value={name} onChange={(e)=>{setname(e.target.value)}}/>
    <input type="text" className='inpu1' name='email' placeholder='field' value={field} onChange={(e)=>{setfield(e.target.value)}}/>
    <input type="text" className='inpu1' name='email' placeholder='age' value={age} onChange={(e)=>{setage(e.target.value)}}/>
    <input type="text" className='inpu1' name='email' placeholder='experince' value={experience} onChange={(e)=>{setexperience(e.target.value)}}/>
   
    <button onClick={login}>Signup please</button>
    </>
  )
}

export default Singup