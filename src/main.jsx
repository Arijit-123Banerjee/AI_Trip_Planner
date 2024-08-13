import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App.jsx";
import "./index.css";
import { Create_trip } from "./Create_Trip/Create_trip.jsx";
import TripPlanner from "./Create_Trip/TripPlanner.jsx";
import { PlaceProvider } from "@/PlaceContext.jsx";
import AuthPage from "./components/auth/Auth.jsx";
import Hero from "./components/Custom/Hero.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Hero /> },
      { path: "/create_trip", element: <Create_trip /> },
      { path: "/create_trip/details", element: <TripPlanner /> },
      { path: "/sign-in", element: <AuthPage /> },
    ],
  },
]);

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkKey) {
  throw new Error("Clerk publishable key was not found");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkKey}>
      <PlaceProvider>
        <RouterProvider router={router} />
      </PlaceProvider>
    </ClerkProvider>
  </StrictMode>
);
