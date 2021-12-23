import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/SideProject.module.css";
import ESNImage from "../public/ESN.png";

export default function SideProject() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        />
      </Head>
      <Layout>
        <Navbar></Navbar>
        <div className="container">
          <h1 className="page-title mb-3">Side Project</h1>
          <div className={styles.project}>
            <div className={`${styles.context} me-5`}>
              <div className={styles.title}>
                <h1 className="text-primary">ESN</h1>
              </div>
              <div className="mb-3">
                This is a course project which implements a social network for
                emergent situation.
              </div>
              <div className="mb-3">
                <span>
                  <b>Tech Stack: </b>
                  VanillaJS, Express.js, MongoDB, Webpack, Chart.js, Jest,
                  Heroku, CircleCI
                </span>
              </div>
              <div className={`${styles.buttons}`}>
                <button className="btn btn-primary me-2">
                  <i className="bi bi-github"></i> Github
                </button>
                <button className="btn btn-primary">
                  <i className="bi bi-link-45deg"></i> Link
                </button>
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src={ESNImage}
                alt="ESN"
                width={500}
                height={300}
                priority
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
