import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import First from "./Component/First";
import Second from "./Page2/Second";
import Third from "./Page3/Third";
import Podcast from "./Page4/Podcast";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/developer" element={<Second />} />
          <Route path="/sample" element={<Third />} />
          <Route path="/podcast" element={<Podcast />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
