import React from 'react'
import DropdownButton from './DropdownBtn';

const EditCourts = () => {

  return (
    <div className='w-screen h-full'>
      <h1
        className='absolute top-15 ml-20 uppercase tracking-[0.15rem] text-black font-semibold'
        style={{ fontSize: "30px", lineHeight: "1.8" }}
      >
        Courts list
      </h1>
      <div className='absolute top-45 left-50 w-3xl items-center space-x-4'>
        <DropdownButton>badminton</DropdownButton>
        <DropdownButton>TENNIS</DropdownButton>
        <DropdownButton>FOOTBALL</DropdownButton>
        <DropdownButton>SQUASH</DropdownButton>
        <DropdownButton>turf</DropdownButton>
        <DropdownButton>vollyball</DropdownButton>
      </div>
      
    </div>
  )
}

export default EditCourts;


