import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Create_trip } from "./Create_Trip/Create_trip.jsx";
import Header from "./components/Custom/Header.jsx";
import TripPlanner from "./Create_Trip/TripPlanner.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/create_trip", element: <Create_trip /> },
  { path: "/create_trip/details", element: <TripPlanner /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>
);
