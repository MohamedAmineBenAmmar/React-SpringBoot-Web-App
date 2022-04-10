import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import DataTable from "./components/DataTable";
import Spinner from "../../components/Spinner";
import Message from "../../components/Message";

// import QuestionsList from "./components/QuestionsList"

import { saveUserSurvey } from "../../services/questionServices";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const history = useHistory();

  const handleSubmit = (data) => {
    setLoading(true);

    setTimeout(() => {
      // Filter data
      const reqBody = data.map((elt) => {
        if (elt.reponse === null) {
          return { ...elt, reponse: 0 };
        } else {
          return { ...elt };
        }
      });

      saveUserSurvey(reqBody)
        .then((res) => {
          // console.log("the success")
          // console.log(res)

          setSuccess(res);
          setLoading(false);
        })
        .catch((err) => {
          // console.log("The error")
          // console.log(err)

          setError(err);
          setLoading(false);
        });
    }, 3000);
  };

  useEffect(() => {
    if (success !== null) {
      setTimeout(() => {
        history.push("/statistics");
      }, 2000);
    }
  }, [success]);

  return (
    <div className="mt-5">
      {loading === null ? (
        <DataTable handleSubmit={handleSubmit} />
      ) : (
        <>
          {loading === true ? (
            <div className="flex flex-wrap align-items-center justify-content-center mtop">
              <Spinner />
            </div>
          ) : (
            <>
              {success !== null && (
                <Message severity="success" detail={success} />
              )}
              {error !== null && <Message severity="error" detail={error} />}
            </>
          )}
        </>
      )}
    </div>
  );
};
