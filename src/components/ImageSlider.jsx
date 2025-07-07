import React, { useState } from 'react'
import {motion} from 'framer-motion'


const ImageSlider = () => {
  const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8])

  const handleNext = () => {
    setPositionIndex((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex)=> (prevIndex +1) % 5)

      return updatedIndexes
    })
  }

  const images = [
    "/slide1.jpg",
    "/slide2.jpg",
    "/slide3.jpg",
    "/slide4.jpg",
    "/slide5.jpg",
    "/slide6.jpg",
    "/slide5.jpg",
    "/slide6.jpg",
    "/space-travel.jpg"
  ]

  const position = [
    'center',
    'left3',
    'left2',
    'left1',
    'left',
    'right',
    'right1',
    'right2',
    'right3'

  ]

  const imageVariants = {
    center: {x:'0%', scale: 2, zIndex: 10},
    left3: {x:'-80%', scale: 1.5, zIndex: 7},
    left2: {x:'-70%', scale: 1.2, zIndex: 6},
    left1: {x:'-60%', scale: 1, zIndex: 5},
    left: {x:'-50%', scale: 0.8, zIndex: 4},
    right: {x:'80%', scale: 1.5, zIndex: 7},
    right1: {x:'70%', scale: 1.2, zIndex: 6},
    right2: {x:'60%', scale: 1, zIndex: 5},
    right3: {x:'50%', scale: 0.8, zIndex: 4},
    

  }

  return (

    
    <div className='flex items-center flex-col justify-center bg-white h-screen'>
    <h2 className="text-5xl font-bold mb-6">Projects</h2>
      {images.map((image, index) => (
        <motion.img
        key={index}
        src={image}
        alt={image}
        className="rounded [12px]"
        initial="center"
        animate={position[positionIndex[index]]}
        variants={imageVariants}
        transition={{duration: 0.5}}
        style={{width: '20%', position: 'absolute'}}
        />
      ))}

      <button className='text-white mt-150 bg-indigo-400 rounded-md py-2 px-4' onClick={handleNext}>Next</button>

    </div>
  )
}

export default ImageSlider