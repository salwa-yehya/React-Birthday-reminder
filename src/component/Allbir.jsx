import React from "react";

const Allbir = ({ pepole }) => {
  let date = new Date();
  //today date "9 / 9 / 2023"
  let currdate = date.getDate(); //9
  let curDate = currdate < 10 ? `0${currdate}` : `${currdate}`;
  let Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currmonth = Month[date.getMonth()]; //8
  let actualDate = `${curDate} ${currmonth}`;
  let hasBirthday = false; // Initialize a flag to check if anyone has a birthday today.

  // Check if anyone has a birthday today
  pepole.forEach(({ date }) => {
    if (date === actualDate) {
      hasBirthday = true;
    }
  });

  return (
    <div>
      {pepole.map(({ id, name, date, age, image, gender }) => {
        if (date === actualDate) {
          return (
            <div className="person" key={id}>
              <img src={image} alt={name} />
              <div className="emp_details">
                <h4>{name}</h4>
                <p>Gender: {gender}</p>
                <p>birthday : {date}</p>
              </div>
            </div>
          );
        } else {
          return null; // Return null for birthdays that don't match
        }
      })}
      {!hasBirthday && <h4>Today is not anyone's birthday</h4>}
    </div>
  );
};

export default Allbir;
