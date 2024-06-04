import PropTypes from 'prop-types'; 

const CustomCard = ({name, age, location, hobbies}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <p>Hobbies:</p>
      <ul>
        {hobbies.map((hobby, index)=>(
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  )
}

export default CustomCard

CustomCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  location: PropTypes.string,
  hobbies: PropTypes.array
}