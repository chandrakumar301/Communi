import React,{useEffect, useState} from 'react'
import Left from './Left'
export default function Right({Data}) {
  const [Message,setMessage]=useState("");
  const Arr={"Chandra":["Hi Chandra Kumar","How is usr day","Good","What About U"],"Jagadeesh":["Hi Jagadeesh","Hi chandra","Yela vunnav","fine","u","Iam Good"],"Sreekanth":["Hi Ra","Hi"],"Priya":["hi Priya","Hi chandu","I Love U","I love u to "],"SaiMadhav":[],"Anusha":[],"Ravi":[],"Kiran":[]}
useEffect(()=>{
  setMessage("");
  },[Data])
if (!Data) {
      return <div className="prana">

      <h1>Welcome to Communi</h1>
      </div>
} 
  return (
    <div className='full'>
    <div className='right'>
      <header> 
        <div><img src={Data.src} alt="" />{Data.name}</div> 
        <div className='mess'> <a href="call">☏</a> <a href="videocall">🖁</a> 
        </div>
         </header> 
         <div className='middle'>
          {Arr[Data.name]?.map((data,index)=>{
            if (index%2===0){
            return( <div className='kuchi'><img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="" /><p>{data}</p></div>)
            }
            else{
              return( <div className='prover'><p>{data}</p><img src={Data.src} alt="" /></div>)

            }
          })}
        </div>
      <div className='middle2'> 
         {Message && <div className='kuchi1'>
          <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="" width={20} height={20}/>
          <p>{Message}</p>
          </div>}
      </div>
    </div>
    <div className='textbar'>
      <input type="text" value={Message} onChange={(e)=>setMessage(e.target.value)} placeholder='Send Message'/>
      <button onClick={()=>MessageChannel()}>➤</button>
    </div>
    </div>
  )
}
