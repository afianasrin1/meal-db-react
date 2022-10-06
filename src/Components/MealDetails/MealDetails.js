import React from "react";
import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const meal = useLoaderData().meals[0];
  // console.log(meal);
  const { strMeal, strTags, strCategory, idMeal } = meal;
  return (
    <div>
      <p>strMeal:{strMeal}</p>
      <p>idMeal:{idMeal}</p>
    </div>
  );
};

export default MealDetails;
