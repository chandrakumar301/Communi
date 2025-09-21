import React from 'react'
// import { useState } from 'react'
export default function Search({setBoo}) {
  // const [Date,setDate]=useState("");
  const AddContact=()=>{
    return(
      <div className='AddContact'>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='AddMobile' />
        <button>Add</button>
      </div>
    )
  }
  return (
    <div className='search'>
        <div className='searchHeading'>
        <h3>Chats</h3>
        <div className='bar'>
        <button onClick={()=>setBoo(true)} >✚</button>
        <a href='/Addchat'>☰</a>
        <a href='/Addchat'></a>
        </div>
        </div>
      <input type="search"  placeholder='Search name'/>
    </div>
  )
}
