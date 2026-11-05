
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import SignatureExperience from "./components/SignatureExperience";
import FragranceNotes from "./components/FragranceNotes";
import OurStory from "./components/OurStory";
import DiscoverySet from "./components/DiscoverySet";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Collection />
        <SignatureExperience />
        <FragranceNotes />
        <OurStory />
        <DiscoverySet />
      </main>
    </>
  );
}

export default App;
