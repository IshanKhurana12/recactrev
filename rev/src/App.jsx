import { createContext, useContext, useEffect, useState } from 'react'
import "./App.css"
import { useReducer } from 'react';
import Postreducer from './Postreducer';
import Color from './Color';
export const colorContext=createContext()
function App() {

  const [posts,dispatch]=useReducer(Postreducer,[]);

  const [color,setcolor]=useState("");
  useEffect(()=>{
  async function getdata(){
      try {
          const result= await fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{
           return res.json()
          })
       
          if(result){
           dispatch({type:"setdata",data:result})
          }
     
      } catch (error) {
          console.log(error)
      }
    }
    getdata();
  },[])
const increase=()=>{
  setCount(count+1);
}





const removepost=(id)=>{
  console.log("remove");
dispatch({type:"remove",index:id});

}



  return (
    <>
<div className='center'>



    <div className='container'>
    <input type='color' onChange={(e)=>(setcolor(e.target.value))} />
    <colorContext.Provider value={{color,setcolor}}>
      <Color />
    </colorContext.Provider>
    <div>
      {posts ? (posts.map((post,id)=>{
         return <div onClick={()=>removepost(post.id)} className="box" key={id}>
         <p>{post.id}</p>
            <h1>{post.title}</h1>
            <h5>{post.body}</h5>
          </div>
      })): <h1>loading...</h1>}
    </div>
    </div>
    </div>
   
 
    </>
  )
}

export default App
