import React from 'react'

const Text = ({name , description}: any) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>{description}</p> 
    </div>
  )
}

export default Text;