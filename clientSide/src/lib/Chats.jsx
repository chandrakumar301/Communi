import React ,{useState,useEffect}from 'react'
export default function Chats({setData,setAnimal,Animal,Value,setValue}) {
  const List = [
  ["Chandra", "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"],
  ["Jagadeesh", "https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"],
  ["Sreekanth", "https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"],
  ["Priya", "https://cdn-icons-png.flaticon.com/512/2922/2922561.png"],
  ["Sai madhav", "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"],
  ["Anusha", "https://cdn-icons-png.flaticon.com/512/2922/2922510.png"],
  ["Ravi", "https://cdn-icons-png.flaticon.com/512/2922/2922506.png"],
  ["Kiran", "https://cdn-icons-png.flaticon.com/512/2922/2922656.png"]
];
const [Array,setArray]=useState(List);
useEffect(()=>{
if(Animal){
  setArray((Array)=>[...Array,Value]);
  setValue([]);
  setAnimal(false);
}
},[Animal,Value,setAnimal,setValue])
    const handleClick=(img,name)=>{
        setData({src:img,name:name});
    } 
  return (
    <div className='images'>
        
        {Array.map((item,index)=> {
            return (
            <div key={index} onClick={()=>handleClick(item[1],item[0])}><img src={item[1]} alt="" /><h3>{item[0]}</h3>
            </div>

        )})}
    </div>
  )
}
