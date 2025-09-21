import React,{useState} from 'react'
import Search from '../lib/Search'
import Chats from '../lib/Chats'
export default function Left({setData}) {
  const [Boo,setBoo]=useState(false);
  const [Name,setName]=useState("");
  const [Mobile,setMobile]=useState(0);
  const [Animal,setAnimal]=useState(false);
  const [Value,setValue]=useState([]);
  const Chandu=()=>{
    if (Name!=="" && Mobile!==0){
      setAnimal(true);
      setValue([Name,"https://cdn-icons-png.flaticon.com/512/2922/2922561.png"]);
      setName("");
      setMobile(0);
      setBoo(false);
    }
  }
  const Close=()=>{
    setBoo(false);
    setName("");
    setMobile(0);
  }
  if(Boo){
    return(
      <div className='AddContact'>
        <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} placeholder='Name' />
        <input type="Number" value={Mobile} onChange={(e)=>setMobile(e.target.value)} placeholder='AddMobile' />
        <button onClick={()=>Chandu()}>Add</button>
        <button onClick={()=>Close()}>Close</button>
      </div>
    )
  }
  else{
  return (
    <div className='left'>
       <Search setBoo={setBoo}/>
       <Chats setData={setData} setAnimal={setAnimal} Animal={Animal} Value={Value} setValue={setValue}/>
    </div>
  )
}
}
