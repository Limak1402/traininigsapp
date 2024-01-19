import React, { useContext, useState } from "react";
import TextLabel from "./TextLabel";
import Button from "./Button";
import AdminButton from "./AdminButton";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IdContext } from "../context/Context";
import axios from "axios";

function Card({ training }) {
  const navigate = useNavigate();
  const [id, setId] = useContext(IdContext);
  const cardId = training.id;
  const [isAdmin, setIsAdmin] = useState(Cookies.get("isAdmin") === "true");
  const [registered, setRegistered] = useState(
    Cookies.get(`isRegistered${cardId}`) === "true"
  );
  const [label, setLabel] = useState("Register");

  useEffect(() => {
    if (Cookies.get(`isRegistered${cardId}`) === "true") {
      setLabel("Unregister");
    }
  });

  const handleRegistered = () => {
    const cardId = training.id;
    const isRegistered = Cookies.get(`isRegistered${cardId}`) === "true";

    if (!isRegistered) {
      setRegistered(true);
      setLabel("Unregister");
      Cookies.set(`isRegistered${cardId}`, true);
    } else {
      setRegistered(false);
      setLabel("Register");
      Cookies.set(`isRegistered${cardId}`, false);
    }
  };

  const handleUpdate = () => {
    setId(cardId);
    navigate("/updateTraining");
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const cardId = training.id;
    axios.delete(`http://localhost:8081/delete/${cardId}`)
    .then((res) => {
      if (res.data.Status === "Success") {
        console.log("Succeded");
        window.location.reload();
      } else {
        console.log(res.data);
        console.log("Failed");
      }
    })
    .catch((err) => console.log(err));
  };

  const mappedTraining = Object.keys(training).map((el, idx) => {
    if (el === "lessons" || el === "hours" || el === "id") {
      return null; // Return null for these keys since we're rendering them separately
    }

    return (
      <div key={idx} className={el}>
        <TextLabel className={el}>{training[el]}</TextLabel>
      </div>
    );
  });

  const lessonsAndHours = (
    <div className="aboutCourse">
      <div class="information">
        <img
          class="icon"
          src={require("../images/lessons.png")}
          alt="Lessons"
        />
        <span className="spanUser">{training.lessons} Lessons</span>
      </div>
      <div class="information">
        <img class="icon" src={require("../images/time.png")} alt="Time" />
        <span className="spanUser">{training.hours} Hours</span>
      </div>
    </div>
  );

  return (
    <>
      {mappedTraining}
      {lessonsAndHours}
      {isAdmin ? (
        <AdminButton
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        ></AdminButton>
      ) : (
        <Button label={label} onClick={handleRegistered}></Button>
      )}
      {registered && !isAdmin && (
        <TextLabel children="Registered!" className="registerLabel"></TextLabel>
      )}
    </>
  );
}

export default Card;
