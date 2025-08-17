import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-orange-400 text-black py-5 text-center text-3xl">
      User : {userid}
    </div>
  );
}

export default User;
