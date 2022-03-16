import React, { useEffect, useRef, useState } from "react"

const Home = () => {
  const [name, setName] = useState("")
  const refInput = useRef(null)

  useEffect(() => {
    onClear()
  }, [])

  const onClear = () => {
    setName("")
    refInput.current.focus()
  }

  const handleEnter = e => {
    if (e.key === "Enter") {
      checkData()
    }
  }

  const checkData = async () => {
    if (name !== "") {
      alert(`enter event input: ${name}`)
    }
  }

  return (
    <div className="container">
      <h1 className="header">Enter</h1>
      <input
        className="inputFiled"
        type="text"
        value={name}
        ref={refInput}
        onChange={e => setName(e.target.value)}
        onKeyPress={handleEnter}
      />
      <button className="btnCheck" onClick={onClear}>
        Check new item
      </button>
      {name !== "" && <div className="header">input data: {name}</div>}
    </div>
  )
}

export default Home
