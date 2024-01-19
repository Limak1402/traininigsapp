import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/mainPage.css";
import Card from "../components/Card";
import Cookies from "js-cookie";
import axios from "axios";
import TextLabel from "../components/TextLabel";

function HomePage() {
  const [trainings, setTrainings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(Cookies.get("isAdmin") === "true");

  useEffect(() => {
    axios
      .get("http://localhost:8081/trainings")
      .then((res) => {
        setTrainings(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);

  const mappedTrainings = trainings.map((el, idx) => (
    <div key={idx} className="card">
      <Card training={el} />
    </div>
  ));

  return (
    <>
      <Header
        value="Create training"
        isCreateTrainingPage={false}
        action={"/createTraining"}
        isAdmin={isAdmin}
      />
      <div class="mainUser">
        {isLoading ? (
          <TextLabel>Loading...</TextLabel>
        ) : error ? (
          <TextLabel>{error}</TextLabel>
        ) : (
          mappedTrainings
        )}
      </div>
    </>
  );
}

export default HomePage;
