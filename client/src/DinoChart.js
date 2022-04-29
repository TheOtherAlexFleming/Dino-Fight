import React from "react";
import {
  Chart,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { normalizeUnits } from "moment";

const DinoChart = ({ Dino, side = "left" }) => {
  Chart.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  const chartLabels = ["Size", "Defence", "Attack", "Special Ability"];

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: Dino.name,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [Dino.size, Dino.attack, Dino.defence, Dino.specialAbilityRating],
      },
    ],
  };

  const chartOptions = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 10,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={side === "left" ? "chart" : "chartright"}>
      <Radar data={chartData} options={chartOptions} />
    </div>
  );
};

export default DinoChart;
