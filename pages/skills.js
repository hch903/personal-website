import { useEffect } from "react";
import { Chart, registerables } from "chart.js";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Skills.module.css";
import { chartAttribute } from "../components/chart-component";

export default function Skills() {
  useEffect(() => {
    Chart.register(...registerables);
    const frontendChart = document.getElementById("frontendChart");
    new Chart(frontendChart, {
      type: chartAttribute.chartType,
      data: {
        labels: chartAttribute.fronendSkills,
        datasets: [
          {
            label: chartAttribute.label,
            data: chartAttribute.frontendProficiency,
            backgroundColor: chartAttribute.backgroundColor,
            borderColor: chartAttribute.borderColor,
            borderWidth: 1,
          },
        ],
      },
      options: chartAttribute.options,
    });

    const backendChart = document.getElementById("backendChart");
    new Chart(backendChart, {
      type: chartAttribute.chartType,
      data: {
        labels: chartAttribute.backendSkills,
        datasets: [
          {
            label: chartAttribute.label,
            data: chartAttribute.backendProficiency,
            backgroundColor: chartAttribute.backgroundColor,
            borderColor: chartAttribute.borderColor,
            borderWidth: 1,
          },
        ],
      },
      options: chartAttribute.options,
    });
  });
  return (
    <Layout>
      <Navbar></Navbar>
      <div className="container">
        <h1 className="page-title mb-3">Skills</h1>
        <div className={`${styles.skill} mb-5`}>
          <h3>Frontend</h3>
          <canvas id="frontendChart"></canvas>
        </div>
        <div className={`${styles.skill} mb-5`}>
          <h3>Backend</h3>
          <canvas id="backendChart"></canvas>
        </div>
        <div className={`${styles.skill} mb-5`}>
          <h3>Others</h3>
        </div>
      </div>
    </Layout>
  );
}
