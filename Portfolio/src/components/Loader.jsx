import React from 'react'
import {Html,useProgress} from '@react-three/drei'

// Provides a percentage load bar while 3d graphic is rendering
const Loader = () => {
  const {progress} = useProgress()
  return (
    <Html
      as="div"
      center
    > 
      <span className="canvas-load"> </span>
      <p
      style={{
        fontSize:20,
        color:'#F1F1F1',
        fontWeight:800,
        marginTop:40,

      }}
      >
        {progress.toFixed(2)}%
      </p>

    </Html>
  )
}

export default Loader