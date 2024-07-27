import React from 'react'

const Content = () => {
    const handleNameChange=()=>{
        const names=['Saniya','Sara','Bhoo'];
        const int=Math.floor(Math.random()*3);
        return names[int]
      }
     const handleClick=()=>{
        console.log("You clicked it!!")
     }
     const handleClick2=(name)=>{
        console.log(`${name} was clicked`)
     }
  return (
    <main>
        <p>
            Hello {handleNameChange()}!
        </p>
        <button onClick={handleClick}>Click me</button>
        <button onClick={()=>{handleClick2('Saniya')}}>Click me</button>
    </main>
  )
}

export default Content
