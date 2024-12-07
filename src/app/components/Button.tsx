"use client";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function Button() {
  //test firebase
  const handleAddUser = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "John",
        last: "Smith",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return <button onClick={handleAddUser}>Add user</button>;
}
