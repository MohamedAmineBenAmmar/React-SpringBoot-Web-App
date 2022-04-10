import React from "react";
import { Chart } from "primereact/chart";

const BarChart = ({ data }) => {
//   const [basicData] = useState({
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//       {
//         label: "Stat",
//         backgroundColor: "#FFA726",
//         data: [65, 59, 80, 81, 56, 55, 40],
//       },
//     ],
//   });

  const getLightTheme = () => {
    let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };

    return {
      basicOptions,
    };
  };

  const { basicOptions } = getLightTheme();

  return (
    <div>
      <div className="card p-5 surface-0">
        <Chart type="bar" data={data} options={basicOptions} />
      </div>
    </div>
  );
};

export default BarChart;
