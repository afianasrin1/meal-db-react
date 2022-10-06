import React from "react";
import { useNavigate } from "react-router-dom";
// import "./Meal.css";
const Meal = ({ meal }) => {
  const { strArea, strMeal, strTags, strCategory, idMeal } = meal;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/meal/${idMeal}`);
  };
  return (
    <div>
      <div className="bg-pink-200 m-5 rounded-md p-5">
        <div className="card-body">
          <h2 className="card-title">strCategory:{strCategory}</h2>
          <p>strMeal:{strMeal}</p>
          <p>strTags:{strTags}</p>
          <div className="card-actions justify-end">
            <button
              className="bg-pink-500 hover:bg-pink-900 w-full rounded-md py-4 mt-2 font-extrabold"
              onClick={handleNavigate}
            >
              Show Details
            </button>
          </div>
        </div>
      </div>

      {/* <p>strMeal:{strMeal}</p>
      <p>strTags:{strTags}</p>
      <p>strCategory:{strCategory}</p>
      <p>idMeal:{idMeal}</p>

      <button className="btn btn-secondary" onClick={handleNavigate}>
        Show Details
      </button> */}
    </div>
  );
};

export default Meal;
