import React from 'react'
import styles from '../components/Home.module.css'
import video from '../../public/abstract.mp4'
import { Canvas } from '@react-three/fiber'
import Planet from './planet'

export const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.videoContainer}> 
                <video src={video} loop autoPlay muted></video> 
                <div className={styles.overlay}>
                    <div>
                        <h1>Exoplanets</h1>
                        <p>An exoplanet is any planet beyond our solar system. Most orbit other stars, but free-floating exoplanets, called rogue planets, are untethered to any star. We’ve confirmed more than 5,200 out of the billions of exoplanets that we believe exist.</p>
                    </div> 
                </div>
            </div> 
            <div className={styles.history}>  
                <div>
                    <h1>History of Exoplanets:</h1>  
                    <p>The history of exoplanet discovery began in 1992 with the detection of planets orbiting the pulsar PSR B1257+12. The first confirmed detection of an exoplanet around a sun-like star occurred in 1995 with 51 Pegasi b. Since then, advances in technology and methods have led to the identification of thousands of exoplanets, significantly expanding our understanding of planetary systems beyond our own.</p>
                </div>
                <div> 
                    <Canvas>
                        <ambientLight/> 
                        <Planet size={[2,32,32]} Color={'rgb(72, 61, 139)'} speed={[0.1]}/> 
                    </Canvas>
                </div>
            </div>
            <div>
                <h1>green</h1>
            </div>
            <div>
                <h1>Yellow</h1>
            </div>
        </div> 
    )
}

export default Home
