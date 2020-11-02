import React from "react";
import { Doughnut } from "react-chartjs-2";
import { appContext } from "../../../context/context";

function DonutChart() {
  const { githubRepos } = React.useContext(appContext);

  const langs = githubRepos.reduce((total, item) => {
    const { language } = item;
    if (!language) {
      return total;
    }

    if (!total[language]) {
      total[language] = 1;
    } else {
      total[language] = total[language] + 1;
    }

    return total;
  }, {});

  const lebels = Object.keys(langs);
  let data = Object.values(langs);

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
      <Doughnut
        options={option}
        data={{
          labels: [...lebels],
          datasets: [
            {
              data: [...data],
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

export default DonutChart;
