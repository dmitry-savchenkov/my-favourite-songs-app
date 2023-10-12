import React, { JSX } from "react";
import { Button } from "../Button";
import styles from "./login.module.css";

export const LogIn = (): JSX.Element => {
  const callServer = () => {
    fetch("http://localhost:4441/user/1")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className={styles.container}>
      <h1>Log in to see your favourite songs!</h1>
      <Button onClick={callServer}>Log in</Button>
    </div>
  );
};
