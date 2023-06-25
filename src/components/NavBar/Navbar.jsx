import React,{useState,useEffect} from 'react'
import styles from './Navbar.module.css'
import Button from '../Button/Button'
import axios from 'axios'
const Navbar = () => {
  const name = "sheraz"
  const age ="34"
const [myName,setMyName] = useState('shaz')
  const changeValue = ()=>{
    setMyName('sheraz')
  }

  // const getUser = async ()=>{
  //   const response = await axios.get('https://fakestoreapi.com/products')
  //   console.log(response.data)
  // }
  useEffect( async()=>{
    const response = await axios.get('https://fakestoreapi.com/products')
    console.log(response.data)
  },[])
  return (
 <>
    <div className={styles.myname}>
    <div>{myName}</div>
    <button onClick={changeValue}>click</button>
    {/* <button onClick={getUser}>getUser</button> */}
    
        <Button name={name} age={age} />
    </div>
 </>
  )
}

export default Navbar