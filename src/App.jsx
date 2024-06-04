// App.jsx
import React from "react";
import CustomCard from "./components/CustomCard"; // Ensure this path is correct

const App = () => {
  const CardData = [
    {
      name: "John Joe",
      age: 45,
      location: "london",
      hobbies: ["sports", "cooking", "gaming"],
    },
    {
      name: "John Joe",
      age: 45,
      location: "london",
      hobbies: ["sports", "cooking", "gaming"],
    },
    {
      name: "John Joe",
      age: 45,
      location: "london",
      hobbies: ["sports", "cooking", "gaming"],
    },
    {
      name: "John Joe",
      age: 45,
      location: "london",
      hobbies: ["sports", "cooking", "gaming"],
    },
  ];

  return (
    <div>
      <h1>Welcome to My App</h1>
      <CustomCard
        name="John Doe"
        age={30}
        location="New York"
        hobbies={["Reading", "Traveling", "Swimming"]}
      />

      {CardData.map((Card, index) => (
        <CustomCard
          key={index}
          name={Card.name}
          age={Card.age}
          location={Card.location}
          hobbies={Card.hobbies}
        />
      ))}
    </div>
  );
};

export default App;
