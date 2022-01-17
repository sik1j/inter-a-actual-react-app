import React, { useEffect, useState } from "react";
import { TemplatePage } from "./TemplatePage";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export const About = () => {
  const usersCollectionRef = collection(db, "schools");
  const [schols, setSchols] = useState<{ [x: string]: any }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      const dataArray = data.docs.map((doc) => ({ ...doc.data() }));
      console.log(data);
      setSchols(dataArray);
      setIsLoading(false);
    };

    setTimeout(() => getUsers(), 1000);
  }, []);
  return (
    <TemplatePage>
      <h1>About</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        schols.map((shcol) => <div>{shcol.title}</div>)
      )}
    </TemplatePage>
  );
};
