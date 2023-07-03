import Home from "./Home";
import { Routes, Route,BrowserRouter } from "react-router-dom"
import BlogPage from "./templates/BlogPage";
import { BlogIntro } from "./templates/BlogIntro";
import About from "./templates/About";
import ShowPlan from "./templates/ShowPlan";
import FaqComponent from "./templates/Faq";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="blog" element={ <BlogPage/> } />
        <Route path='/health-reads'element={<BlogIntro/>}/>
        <Route path='/show-plans' element={<ShowPlan/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/faq' element={<FaqComponent/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
