import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Experience.module.css";
import experience from "../source/experience.json";

export default function Experience() {
  return (
    <Layout>
      <Navbar></Navbar>
      <div className="container">
        <h1 className="page-title mb-3">Experience</h1>
        {/* Amazon */}
        <div>
          <div className={styles.title}>
            <h1>
              <span className="text-primary">{experience.Amazon.employer}</span>, {experience.Amazon.location}
            </h1>
            <h4 className={styles.duration}>{experience.Amazon.time}</h4>
          </div>
          <div className="subheading">
            {experience.Amazon.title} | {experience.Amazon["tech-stack"]}
          </div>
          <div className="mb-5">
            <span className={styles.detail}>
              {experience.Amazon.description[0]}
            </span>
            <span className={styles.detail}>
              {experience.Amazon.description[1]}
            </span>
            <span className={styles.detail}>
              {experience.Amazon.description[2]}
            </span>
            <span className={styles.detail}>
              {experience.Amazon.description[3]}
            </span>
          </div>
        </div>
        
        {/* Dent&Co */}
        <div>
          <div className={styles.title}>
            <h1>
              <span className="text-primary">{experience["Dent&Co"].employer}</span>, {experience["Dent&Co"].location}
            </h1>
            <h4 className={styles.duration}>{experience["Dent&Co"].time}</h4>
          </div>
          <div className="subheading">
            {experience["Dent&Co"].title} | {experience["Dent&Co"]["tech-stack"]}
          </div>
          <div className="mb-5">
            <span className={styles.detail}>
              {experience["Dent&Co"].description[0]}
            </span>
            <span className={styles.detail}>
              {experience["Dent&Co"].description[1]}
            </span>
            <span className={styles.detail}>
              {experience["Dent&Co"].description[2]}
            </span>
            <span className={styles.detail}>
              {experience["Dent&Co"].description[3]}
            </span>
          </div>
        </div>

        {/* Cathay United Bank */}
        <div>
          <div className={styles.title}>
            <h1>
              <span className="text-primary">
                {experience.Cathay.employer}
              </span>
              , {experience.Cathay.location}
            </h1>
            <h4 className={styles.duration}>{experience.Cathay.time}</h4>
          </div>
          <div className="subheading">
            {experience.Cathay.title} | {experience.Cathay["tech-stack"]}
          </div>
          <div className="mb-5">
            <span className={styles.detail}>
              {experience.Cathay.description[0]}
            </span>
            <span className={styles.detail}>
              {experience.Cathay.description[1]}
            </span>
            <span className={styles.detail}>
              {experience.Cathay.description[2]}
            </span>
            <span className={styles.detail}>
              {experience.Cathay.description[3]}
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
