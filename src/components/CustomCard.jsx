import React from 'react'

const CustomCard = ({name, age, location, hobbies}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <p>Hobbies:</p>
      <ul>
        {hobbies.map((hobby, index)=>(
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  )
}

export default CustomCard
