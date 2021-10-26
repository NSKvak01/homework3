import React, {useState, useEffect} from 'react'
import "./App.css"

export default function App() {
  const [remove, setRemove] = useState("remove")
  const [add, setAdd] = useState("add")
  const [count, setCount] = useState(0)
  const [countArray, setCountArray] = useState([])

  function onRemove(){
    setCount(count-1)
    // setCountArray(new Array(count).fill("hi"))
  }

  const onAdd = ()=>{
    setCount(count+1)
    // setCountArray(new Array(count).fill("hi"))
    console.log(countArray)
  }

  useEffect(() => {
    setCountArray(new Array(count).fill("hi"))
  }, [count])

  return (
    <div>
      <button onClick={onRemove}>{remove}</button>
      <div>{count}</div> 
      <button onClick = {onAdd}>{add}</button>  
      <div className="star">
      {countArray.map(()=>{
          return(
            <div className="star-box">
              <img className="star-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png" />
            </div>
          )
        })
      }
      </div> 
    </div>
  )
}
