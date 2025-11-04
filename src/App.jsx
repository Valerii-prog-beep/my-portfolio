import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WebDevelopment from './pages/WebDevelopment';
import Writing from './pages/Writing';
import Photos from './pages/Photos';
import Music from './pages/Music';
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <Router>
      <ScrollToTop >
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web" element={<WebDevelopment />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </Layout>
      </ScrollToTop >
    </Router>
  );
}

export default App;