import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import MealDetails from "../Components/MealDetails/MealDetails";
import Meals from "../Components/Meals/Meals";
import Notfound from "../Components/Notfound/Notfound";
import Resturent from "../Components/Resturent/Resturent";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/home", element: <Home /> },
      {
        path: "mealdb",
        loader: async () => {
          return fetch(
            "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
          );
        },
        element: <Meals />,
      },
      {
        path: "/meal/:idMeal",
        loader: async ({ params }) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`
          );
        },
        element: <MealDetails />,
      },
    ],
  },
  { path: "*", element: <Notfound /> },
  { path: "/resturent/", element: <Resturent /> },
  { path: "/about", element: <About /> },
]);
