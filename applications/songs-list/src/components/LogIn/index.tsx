import React, { JSX } from "react";
import { Button } from "../Button";
import styles from "./login.module.css";

export const LogIn = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1>Log in to see your favourite songs!</h1>
      <Button>Log in</Button>
    </div>
  );
};
