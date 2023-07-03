import About from "./templates/About";
import Faq from "./templates/Faq";
import Intro from "./templates/Intro";
import Plans from "./templates/Plans";

function Home() {
  return (
    <div className="App">
      <Intro/>
      <Plans/>
    </div>
  );
}

export default Home;