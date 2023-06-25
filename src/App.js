import About from "./templates/About";
import Faq from "./templates/Faq";
import Header from "./templates/Header";
import Intro from "./templates/Intro";
import Plans from "./templates/Plans";

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <Plans/>
      <Faq/>
    </div>
  );
}

export default App;
