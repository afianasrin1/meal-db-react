import React from "react";
import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
  const meals = useLoaderData().meals;
  //   console.log(meals);
  return (
    <div>
      <h1 className="text-4xl text-center font-bold mt-4"> Meal Db</h1>
      <div className=" w-full mx-auto grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Meals;
