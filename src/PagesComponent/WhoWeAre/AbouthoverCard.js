import React from "react";
import Image from "next/image";
import styles from "./HoverSlideCard.module.css";
import { ChevronDown } from "lucide-react";

const AbouthoverCard = ({ image, title, description, imageAlt }) => {
    return (
        <article className={styles.card}>
            <div className={`${styles.slide} ${styles.slide1}`}>
                <Image
                    src={image}
                    alt={imageAlt || title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.slideImage}
                />

                <div className={styles.hoverHint} aria-hidden="true">
                    <span className={styles.hintIcon}>
                        <ChevronDown />
                    </span>
                </div>
            </div>

            <div className={`${styles.slide} ${styles.slide2}`}>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </article>
    );
};

export default AbouthoverCard;
