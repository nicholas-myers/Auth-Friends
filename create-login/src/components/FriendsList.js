import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import { Route } from "react-router-dom";

import NewFriendForm from "./NewFriendForm";

import styled from "styled-components";

const FriendContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-flow: wrap;
`;

const FriendCard = styled.div`
  width: 15%;
  /* margin: 1%; */
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1%;
  margin: 3% 0;
  button {
    width: 50%;
  }
`;

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    getFriends();
  }, [friends]);

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
    <>
      <NewFriendForm />
      <FriendContainer>
        {friends.map((friend) => {
          return (
            <FriendCard key={friend.id}>
              <h2>{friend.name}</h2>
              <p>Age: {friend.age}</p>
              <p>Email: {friend.email}</p>
              <button>Edit</button>
            </FriendCard>
          );
        })}
      </FriendContainer>
    </>
  );
}
