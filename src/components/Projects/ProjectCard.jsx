import React from "react";
import { getImageUrl } from "../../utils"
import styles from "./ProjectCard.module.css"

export const ProjectCard = ({ project: {title, imageSrc, description, skills, text1, text2, link1, link2} }) => {
    return (
        <div className={styles.container}> 
            <img className={styles.image} src={getImageUrl(imageSrc)} alt={title} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return(
                        <li className={styles.skill} key={id}>{skill}</li>
                    )
                })}
            </ul>
            <div className={styles.links}>
                {text1 !== "" ? (
                    <a className={styles.link} href={link1}>{text1}</a>
                ): null}
                {text2 !== "" ? (
                    <a className={styles.link} href={link2}>{text2}</a>
                ): null}
            </div>
        </div>
    )
}