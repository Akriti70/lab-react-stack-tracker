import { useState } from "react";
import "./App.css";

import companiesData from "./companies.json";
import technologiesData from "./technologies.json";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const [companies] = useState(companiesData);
  const [technologies] = useState(technologiesData);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage companies={companies} />} />

        <Route
          path="/company/:companySlug"
          element={<CompanyPage companies={companies} />}
        />

        <Route
          path="/tech/:slug"
          element={<TechnologyPage technologies={technologies} />}
        />
      </Routes>
    </div>
  );
}

export default App;
