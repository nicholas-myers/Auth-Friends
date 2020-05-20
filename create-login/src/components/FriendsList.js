import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import { Route } from "react-router-dom";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        // console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form>
        <label>Name:</label>
        <input />
        <label>Age:</label>
        <input />
        <label>Email:</label>
        <input />
        <button>Add Friend</button>
      </form>
      {friends.map((friend) => {
        return (
          <div key={friend.id}>
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        );
      })}
    </div>
  );
}
