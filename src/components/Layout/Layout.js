import React from "react";
import styles from './styles.module.scss';

const Layout = (props) => {
    return (
        <div className={styles.wrapper}>
            <header>Soobar team game</header>
            <main className={styles.main}>
                {props.children}
            </main>
            <footer></footer>
        </div>
    );
}

export default Layout;

