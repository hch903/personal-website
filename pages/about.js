import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/About.module.css";

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
            Hao Chen <span className="text-primary">Hsieh</span>
          </h1>
          <p className={`${styles.introduction} mb-5`}>
            Hi! I am Hao Chen Hsieh. I&apos;m a graduate student studying in
            Carnegie Mellon University
          </p>
          <div className={styles.socialIcons}>
            <a className={styles.socialIcon} href="">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className={styles.socialIcon} href="">
              <i className="fab fa-github"></i>
            </a>
            <a className={styles.socialIcon} href="">
              <i className="fab fa-twitter"></i>
            </a>
            <a className={styles.socialIcon} href="">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
}
