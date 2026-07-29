import styles from "@/styles/techHeroSection.module.css";
import Image from "next/image";
import { TechnologyimageMap } from "../../Maps/Imagesmap";

const techs = [
    TechnologyimageMap["React.webp"],
    TechnologyimageMap["nextjs.webp"],
    TechnologyimageMap["nodejs.webp"],
    TechnologyimageMap["aws.webp"],
    TechnologyimageMap["dockernew1.webp"],
    TechnologyimageMap["flutter.webp"],
    TechnologyimageMap["Vuejs.webp"],
    TechnologyimageMap["angularjs.webp"],
    TechnologyimageMap["python.webp"],
    TechnologyimageMap["Ruby_on_Rails-Logo.webp"],
    TechnologyimageMap["laravel.webp"],
    TechnologyimageMap["firebase.webp"],
    TechnologyimageMap["android.webp"],
    TechnologyimageMap["apple.webp"],
    TechnologyimageMap["mongodb.webp"],
    TechnologyimageMap["aws.webp"],
    TechnologyimageMap["dockernew1.webp"],
    TechnologyimageMap["cicd.webp"],
    TechnologyimageMap["kubernets.webp"],
    TechnologyimageMap["jira.webp"],
    TechnologyimageMap["slack.webp"],
    TechnologyimageMap["clickup.webp"],
    TechnologyimageMap["asana.webp"],
    TechnologyimageMap["trello.webp"],
    TechnologyimageMap["Nest.js.webp"],
    TechnologyimageMap["MaterialUi.webp"],
    TechnologyimageMap["TailwindCSS.webp"],
    TechnologyimageMap["Bootstrap.webp"],
    TechnologyimageMap["GitHub.webp"],
];

const uniqueTechs = [];
const seenTechs = new Set();
for (const src of techs) {
    if (!seenTechs.has(src)) {
        seenTechs.add(src);
        uniqueTechs.push(src);
    }
}

const slide1Techs = uniqueTechs.filter((_, index) => index % 3 === 0);
const slide2Techs = uniqueTechs.filter((_, index) => index % 3 === 1);
const slide3Techs = uniqueTechs.filter((_, index) => index % 3 === 2);

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.row}>
                    {/* LEFT SIDE */}
                    <div className={styles.leftCol}>
                        <div className={styles.sectionTitle}>
                            <h2 className={styles.subTitle}>Tools and Technology</h2>
                            <h3 className={styles.heading}>
                                Technologies We Use for <span>Software & App Development</span>
                            </h3>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className={styles.rightCol}>
                        <div className={styles.technologiesItems}>
                            <div className={`${styles.technologiesList} ${styles.webAppTech}`}>
                                <div className={styles.technologiesListWrap}>
                                    {[...slide1Techs, ...slide1Techs].map((src, i) => (
                                        <Image key={`row1-${i}`} src={src} alt="" width={60} height={60} />
                                    ))}
                                </div>
                            </div>

                            <div
                                className={`${styles.technologiesList} ${styles.frontEndTech} ${styles.reverseLoop}`}
                            >
                                <div className={styles.technologiesListWrap}>
                                    {[...slide2Techs, ...slide2Techs].map((src, i) => (
                                        <Image key={`row2-${i}`} src={src} alt="" width={60} height={60} />
                                    ))}
                                </div>
                            </div>

                            <div className={`${styles.technologiesList} ${styles.backEndTech}`}>
                                <div className={styles.technologiesListWrap}>
                                    {[...slide3Techs, ...slide3Techs].map((src, i) => (
                                        <Image key={`row3-${i}`} src={src} alt="" width={60} height={60} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
