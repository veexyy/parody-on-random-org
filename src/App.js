import "./App.css";
import Main from "./comp/Main";
import Error from "./comp/404";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Error />}></Route>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
