// UseRef allows us to access DOM elements.
// for creating mutable varianles which will not re-render the component

import { useState, useRef, useEffect } from "react"

function App() {

  const inputEle = useRef()
  const handleClick = () => {
    console.log(inputEle);
    inputEle.current.style.width = "300px"
    inputEle.current.focus()
  }

  return (
    <>
    <input type="text" ref={inputEle} />
    <button onClick={handleClick}>Click Here</button>

    </>
  )
}

export default App
