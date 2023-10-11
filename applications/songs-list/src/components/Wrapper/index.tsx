import React from "react";
import {PropsWithChildren} from "react";
import styles from './wrapper.module.css';

export const Wrapper = ({ children }: PropsWithChildren) => <div className={styles.wrapper}>{children}</div>