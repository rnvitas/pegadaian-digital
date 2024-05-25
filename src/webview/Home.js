import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Security from "../components/Security";
import Testimoni from "../components/Testimoni";
import Question from "../components/Question";
import Promotion from "../components/Promotion";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Benefits />
      <Security />
      <Testimoni />
      <Question />
      <Promotion />
      <Footer />
    </div>
  );
}

export default Home;
