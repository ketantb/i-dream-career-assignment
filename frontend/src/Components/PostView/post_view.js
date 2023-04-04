import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './card';
import Header from './header';
 
export default function PostView() {
   const [userData, setUserData] = useState()
   const fetchData = async () => {
      try{
      await axios.get("https://instaketan-server.onrender.com/all")
       .then((data) => 
       {
         setUserData(data.data.reverse())
       // console.log(data.data)
       })
      }
      catch(err){
         console.log(err)
      }
     }
     useEffect(() => {
      fetchData();
     }, [userData])
     // console.log(userData)
  return(
     <>
      <section className='post-view-container'>
         <div className='post-view-header'>
        <Header/>
         </div>
         <div className='post-view-main'>
         <Cards userData = {userData}/>
         </div>
      </section>
     </>
  )
}
