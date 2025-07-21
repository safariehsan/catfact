import React from "react";
import { useParams } from "react-router";

const Detail = () => {
  let { length } = useParams();
  return (
    <div>
      Detail of fact <b> {length}</b>
    </div>
  );
};

export default Detail;
