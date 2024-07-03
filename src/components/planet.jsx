import { useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import { TextureLoader } from 'three'

const Planet = ({size,Color,speed}) => { 
  const ref = useRef() 

   
  useFrame((state,delta) => {
    ref.current.rotation.y +=delta*speed 
  })
    
  return ( 
    <mesh ref={ref}> 
        <sphereGeometry args={size}/> 
        <meshStandardMaterial color={Color} wireframe/> 
    </mesh>
  )
} 
 
export default Planet