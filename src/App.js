import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import HomePage from "./pages/homepage";
import Root from "./components/root";
import ErrorPage from "./pages/errorpage";
import Mission from "./pages/mission";
import Events from "./pages/events";
import StoryPage from "./pages/storypage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route path="" element={<HomePage />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/events" element={<Events />} />
        <Route path="/story" element={<StoryPage />} />
      </Route>,
    ),
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
