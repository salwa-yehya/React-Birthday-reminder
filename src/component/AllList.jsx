import React from "react";

const AllList = ({ pepole }) => {
   
  console.log(pepole);
  return pepole.map(({ id, name, date, age, image, gender }) => {  
    return (
      <div key={id} className="person">
        <img src={image} alt={name} />
        <div className="emp_details">
          <h4>{name}</h4>
          <p>Gender: {gender}</p>
          <p>birthday : {date}</p>
        </div>
      </div>
    );
  });
};

export default AllList;
