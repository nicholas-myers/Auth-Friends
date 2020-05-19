import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
useEffect(() => {
    getFriends()
}, [])


  const getFriends = () => {
    axiosWithAuth()
    .get("/api/friends")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <div>Friends go here</div>;
}
