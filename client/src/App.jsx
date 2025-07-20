import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Dashboad from "./pages/Dashboad";
import Writearitcle from "./pages/Writearitcle";
import BlogTitles from "./pages/BlogTitles";
import GenratedImages from "./pages/GenratedImages";
import Removebackground from "./pages/Removebackground";
import RemoveObject from "./pages/RemoveObject";
import Reviewresume from "./pages/Reviewresume";
import Community from "./pages/Community";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Layout />}>
          <Route index element={<Dashboad />} />
          <Route path="write-ariticle" element={<Writearitcle />} />
          <Route path="blog-titles" element={<BlogTitles />} />
          <Route path="generative-images" element={<GenratedImages />} />
          <Route path="remove-background" element={<Removebackground />} />
          <Route path="remove-object" element={<RemoveObject />} />
          <Route path="review-resume" element={<Reviewresume />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
