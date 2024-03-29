import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hey There
                </h1>
                <p className={styles.description}>Welcome to my porfolio</p>
                <a className={styles.contactBtn} href="mailto:rkoci98@gmail.com"> Reach Out!</a>
            </div>
            <img 
                className={styles.heroImg}
                src={getImageUrl("hero/acron.jpeg")} 
                alt="Hero image" 
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}
