import './App.css';
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>

      </header>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter> 
        </div>
    </div>
  );
}

export default App;
