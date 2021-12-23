import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Experience.module.css";

export default function Experience() {
  return (
    <Layout>
      <Navbar></Navbar>
      <div className="container">
        <h1 className="page-title mb-3">Experience</h1>
        {/* Dent&Co */}
        <div>
          <div className={styles.title}>
            <h1>
              <span className="text-primary">Dent&Co</span>, Taipei, Taiwan
            </h1>
            <h4 className={styles.duration}>Nov. 2019 – Oct. 2020</h4>
          </div>
          <div className="subheading">
            Software Engineer Intern | Node.js, Chatbot, Express.js, MySQL, PM2,
            EC2, CloudWatch
          </div>
          <div className="mb-5">
            <span className={styles.detail}>
              - Designed and developed a LINE chatbot with Node.js and managed
              with PM2.{" "}
              <b>
                This provided over 500 dentists and dental assistants to check
                around 15,000 patients’ data and over 200,000 feedbacks.
              </b>
            </span>
            <span className={styles.detail}>
              - Implemented 20 features of chatbot including providing weekly
              data reports and real-time appointment notifications to dental
              clinics. <b>This decreased 80% time</b> for clinics to confirm
              appointments with patients by phone call.
            </span>
            <span className={styles.detail}>
              - Established a platform with Vue.js, Express, MySQL for dental
              dealers to advertise products to dentists,{" "}
              <b>which increased 20 percent of monthly revenue.</b>
            </span>
            <span className={styles.detail}>
              - Deployed chatbot server on AWS EC2 and monitored memory
              utilization by AWS CloudWatch.
            </span>
          </div>
        </div>

        {/* Cathay United Bank */}
        <div>
          <div className={styles.title}>
            <h1>
              <span className="text-primary">
                Cathay United Bank Trading Room
              </span>
              , Taipei, Taiwan
            </h1>
            <h4 className={styles.duration}>Jul. 2019 – Dec. 2019</h4>
          </div>
          <div className="subheading">
            Web Development Intern | HTML, CSS, jQuery, PHP, MySQL
          </div>
          <div className="mb-5">
            <span className={styles.detail}>
              - Constructed website with HTML/CSS/jQuery and PHP,{" "}
              <b>which provided over 50 employees</b> to check and upload daily
              trading information on the intranet.
            </span>
            <span className={styles.detail}>
              - Accomplished regulation searching system with over 100 internal
              and external regulations,{" "}
              <b>which reduced over 60% of the searching time</b> on preceding
              Excel tables.
            </span>
            <span className={styles.detail}>
              - Refactored a better relation with entity-relationship diagram in
              MySQL database to <b>diminish 40% of SQL query error rate.</b>
            </span>
            <span className={styles.detail}>
              - Designed and devised a meeting room reservation website for the
              whole trading room. <b>Over 100 employees</b> reserve meeting
              rooms via this web application two times a week.
            </span>
          </div>
        </div>

        {/* Cobinhood */}
        <div>
          <div className={styles.title}>
            <h1>
              <span className="text-primary">Cobinhood, Ltd</span>, Taipei,
              Taiwan
            </h1>
            <h4 className={styles.duration}>Jul. 2018 – Jan. 2019</h4>
          </div>
          <div className="subheading">
            Product / Marketing Intern | Python, Selenium, BeautifulSoup, AWS
            Lambda
          </div>
          <div className="mb-5">
            <span className={styles.detail}>
              - Utilized Selenium and BeautifulSoup and deployed on AWS Lambda
              to execute weekly to obtain public cryptocurrency market
              information including{" "}
              <b>top 200 cryptocurrency market price and trading volume.</b>
            </span>
            <span className={styles.detail}>
              - Analyzed top 5 cryptocurrency cold wallets to help product
              managers to improve and modify product prototypes.
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
