import React, { useState, useEffect } from "react";

import BarChart from "./components/BarChart";
import { getStat } from "../../services/questionServices";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [data, setData] = useState([]);

  const prepareData = (data) => {
      return(
        {
            labels: [...Object.keys(data)],
            datasets: [
                {
                    label: 'Employees Satisfaction',
                    backgroundColor: '#FFA726',
                    data: [...Object.values(data)]
                }
            ]
        }
      )
  }

  useEffect(() => {
    getStat()
      .then((res) => {        
          setData(prepareData(res))
      })
      .catch((err) => {
          console.log(err)
      });
  }, []);

  return (
    <div>
    <h2>Statistics</h2>
      <BarChart data={data} />
    </div>
  );
};
