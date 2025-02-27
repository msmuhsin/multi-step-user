import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDetailsPage from './Pages/UserDetailsPage';
import DropdownPage from "./Pages/DropdownPage";
import NotePage from './Pages/NotePage';
import SummaryPage from './Pages/SummaryPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Multi-Step User Application</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<DropdownPage />} />
            <Route path="/user-details/:id" element={<UserDetailsPage />} />
            <Route path="/note/:id" element={<NotePage />} />
            <Route path="/summary/:id" element={<SummaryPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;