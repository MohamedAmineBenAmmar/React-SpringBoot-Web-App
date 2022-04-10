import axios from "axios";

/**
 * Function to fetch all the users.
 */
export const getAllQuestions = () => {
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios
        .get("/getModelQuestion")
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject("Error in getting the questions from the database axios!");
        });
    } catch (error) {
      reject("System Error");
    }
  });
};

/**
 * Function to fetch all the users.
 */
export const saveUserSurvey = (reqBody) => {
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios
        .post("/saveAll", reqBody)
        .then((res) => {
          resolve("Responses saved successfully.");
        })
        .catch((err) => {
          reject("Error in user responses");
        });
    } catch (error) {
      reject("System Error");
    }
  });
};

/**
 * Function to fetch all the users.
 */
export const getStat = (reqBody) => {
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios
        .get("/getStatistique", reqBody)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject("Error in statistics calculations");
        });
    } catch (error) {
      reject("System Error");
    }
  });
};
