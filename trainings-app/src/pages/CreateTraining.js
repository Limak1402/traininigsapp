import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import "../styles/mainPage.css";
import "../styles/createCourse.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IdContext } from "../context/Context";

function CreateTraining({ value }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [lessons, setLessons] = useState("");
  const [hours, setHours] = useState("");
  const [isCreatePage, setisCreatePage] = useState(false);
  const [id, setId] = useContext(IdContext);
  const [error, setError] = useState("");

  useEffect(() => {
    setisCreatePage(value === "Create new training");
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8081/getSelectedTraining/${id}`)
      .then((res) => {
        setTitle(res.data[0].title)
        setLessons(res.data[0].lessons);
        setDescription(res.data[0].description);
        setHours(res.data[0].hours);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleLessonsChange(e) {
    setLessons(e.target.value);
  }

  function handleHoursChange(e) {
    setHours(e.target.value);
  }

  const addData = async (e) => {
    e.preventDefault();
    if(title.trim()  === "" || description.trim()  === "" || lessons.trim()  === "" || hours.trim()  === "") {
      setError("Value is missing!");
    } else {
    axios
      .post("http://localhost:8081/addData",
      {
        title: title, description: description,
        lessons: lessons, hours: hours
      })
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log("Succeded");
          navigate("/homePage");
        } else {
          console.log(res.data);
          console.log("Failed");
        }
      })
      .catch((err) => console.log(err));
    }
  };

  const updateData = async (e) => {
    e.preventDefault();
    console.log(title)
    if(title.trim()  === "" || description.trim()  === "" || lessons.trim()  === "" || hours.trim()  === "") {
      setError("Value is missing!");
    } else {
      axios
      .put("http://localhost:8081/update", 
      {
        title: title, description: description,
        lessons: lessons, hours: hours, id: id
      })
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log("Succeded");
          navigate("/homePage");
        } else {
          console.log("Failed");
        }
      })
      .catch((err) => console.log(err));
    }
  };

  return (
    
    <div>
      <Header
        value="All trainings"
        isCreateTrainingPage={true}
        action={"/homePage"}
      />
      
      {error && <p style={{ color: "red", fontWeight: "bold", fontSize: "32px", textAlign: "center", marginTop: "35px", paddingBottom: "0" }}>{error}</p>}
      <div class="container">
        <h2>{value}</h2>
        <div class="first-row">
          <div class="input-box">
            <p>Title</p>
            <Input value={title} onChange={handleTitleChange} />
          </div>
          <div class="input-box">
            <p>Lessons</p>
            <Input value={lessons} onChange={handleLessonsChange} />
          </div>
        </div>
        <div class="second-row">
          <div class="input-box">
            <p>Description</p>
            <Input value={description} onChange={handleDescriptionChange} />
          </div>
          <div class="input-box">
            <p>Hours in total</p>
            <Input value={hours} onChange={handleHoursChange} />
          </div>
        </div>
        <div class="buttons">
          <div class="confirmButton">
            {isCreatePage ? (
              <button
                class="orangeButtonCreate"
                onClick={addData}
                type="submit"
              >
                {value}
              </button>
            ) : (
              <button
                class="orangeButtonCreate"
                onClick={updateData}
                type="submit"
              >
                {value}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTraining;
