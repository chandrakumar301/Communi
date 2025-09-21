import React, { useState } from 'react'
import Left from '../components/Left'
import Right from '../components/Right'
import Le from '../components/Le'

export default function HomePage() {
const [Data,setData]=useState(null);
    return (
      <div className="home">
        <div className="Home">
            <Le/>
            <Left setData={setData}/>
            <Right Data={Data}/>
        </div>
       
      </div>
    )
  
}


