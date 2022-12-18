import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/About.module.css";

const introduction =
  "Hi! I am Hao Chen Hsieh. You can also call me Winston!\n\
  I'm a graduate student studying in Carnegie Mellon University, Silicon Valley";

export default function About() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
      </Head>
      <Script
        src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
        crossorigin="anonymous"
      ></Script>
      <Layout>
        <Navbar></Navbar>
        <div className="container">
          <h1 className={`${styles.title} mb-5`}>
            HaoChen <span className="text-primary">Hsieh</span>
          </h1>
          <div className={`${styles.introduction} mb-5`}>
            <p>
              <b>
                Hi! I am HaoChen Hsieh from Taiwan. You can also call me
                Winston.
              </b>
            </p>
            <p>
              I majored in Software Engineering and graduated from Carnegie Mellon University.
            </p>
            <p>
              I have interned at Amazon, Dent&amp;Co and Cathay United Bank.
            </p>
            <p>I am familiar with Full Stack Development and Chatbot.</p>
          </div>

          <div className={styles.socialIcons}>
            <a
              className={styles.socialIcon}
              href="https://www.linkedin.com/in/hch903/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className={styles.socialIcon} href="https://github.com/hch903">
              <i className="fab fa-github"></i>
            </a>
            <a className={styles.socialIcon} href="https://twitter.com/hch903">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className={styles.socialIcon}
              href="https://www.facebook.com/profile.php?id=100000240454920"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
}
