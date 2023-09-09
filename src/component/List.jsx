import React, { useState } from "react";
import { data } from "../data";
import { Link } from "react-router-dom";
import AllList from "./AllList";

const List = () => {
  const [peop , setPepole] = useState(data);
  return (
    <div className="container">
      <h1>pepole List<sup>{peop.length}</sup> </h1>
      <br />
      <AllList pepole={data} />
    
      <Link to="/bd">Show Birthday </Link>
      <Link to="/">Back Home </Link>

    </div>
  );
};

export default List;
