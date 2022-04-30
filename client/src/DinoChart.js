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

const DinoChart = ({ Dino, side = "left" }) => {
  Chart.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  // Leaving off special ability stats for now
  //   const chartLabels = ["Size", "Attack", "Defence", "Special Ability"];
  const chartLabels = ["Size", "Attack", "Defence"];

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: Dino.name,
        backgroundColor: "#a2d729",
        borderColor: "#a2d729",
        data: [Dino.size, Dino.attack, Dino.defence],
      },
    ],
  };

  const chartOptions = {
    elements: {
      point: {
        pointBorderWidth: 0,
      },
    },
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        grid: {
          z: 1,
        },
        ticks: {
          z: 2,
          showLabelBackdrop: false,
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
