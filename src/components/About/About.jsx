import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    className={styles.aboutImage}
                    src={getImageUrl("about/aboutImage.png")} 
                    alt="Laptop Image" 
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Who's Reni?</h3>
                            <p>
                                Great Question! I... dont know how to answer that. What I can say is that I enjoy learning new things. 
                                I have explored different fields while working and have worked on different projects (games, websites, neural networks) because something always fasciantes me.
                                In my heart tho I am a developer and will always stay that way
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>The Past</h3>
                            <p>
                                I have a BSc. in Computer Engineering and am currently pursuing a Masters in Data Science in Berlin. 
                                My journey into programming began in my final year of high school, and from that first line of code, I was hooked. 
                                So I decided to follow the Software Engineering path instead of being an architect and I don't regret it one bit
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>The Future</h3>
                            <p>
                                I have no actual plan where I'll end up living or what job title I will post on my LinkedIn profile. 
                                All I know is, I'm sticking to the path of endless learning that programming offers. It's like diving into this vast ocean of possibilities, 
                                and I'm just riding the waves, eager to see where they'll take me next.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            
        </section>
    );
}