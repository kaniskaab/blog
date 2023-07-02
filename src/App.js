import Home from "./Home";
import { Routes, Route,BrowserRouter } from "react-router-dom"
import BlogPage from "./templates/BlogPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="blog" element={ <BlogPage/> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
