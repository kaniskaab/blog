import About from "./templates/About";
import { BlogIntro } from "./templates/BlogIntro";
import Faq from "./templates/Faq";
import Intro from "./templates/Intro";
import Plans from "./templates/Plans";

function Home() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <Plans/>
      <Faq/>
      <BlogIntro/>
    </div>
  );
}

export default Home;