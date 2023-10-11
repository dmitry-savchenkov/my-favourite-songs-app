import React, {JSX, PropsWithChildren} from 'react';
import styles from './button.module.css';

type ButtonProps = {
    onClick?: () => void;

}

export const Button = ({ children, onClick }: PropsWithChildren<ButtonProps>) => {
    return (<button className={styles.button} onClick={() => onClick?.()}>
      {children}
    </button>);
}