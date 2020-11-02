import React from "react";
import { Bar } from "react-chartjs-2";
import { appContext } from "../../../context/context";

function BarChart() {
  const { githubRepos } = React.useContext(appContext);

  const option = {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var meta = dataset._meta[Object.keys(dataset._meta)[0]];
          var total = meta.total;
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = parseFloat(
            ((currentValue / total) * 100).toFixed(1)
          );
          return " (" + percentage + "%)";
        },
        title: function (tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        },
      },
    },
  };

  return (
    <div>
      <Bar
        width={200}
        height={200}
        options={option}
        data={{
          labels: ["hello", "tyjjk"],
          datasets: [
            {
              data: [1, 23, 44, 56, 646, 7443, 242],
              backgroundColor: [
                "#f1d4d4",
                "#e6739f",
                "#cc0e74",
                "#790c5a",
                "#c060a1",
                "#d7385e",
                "#c62a88",
              ],
              borderColor: [],
            },
          ],
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}

export default BarChart;
