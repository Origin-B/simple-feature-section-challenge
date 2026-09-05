import { features } from "./data-type";

import Header from "./component/Header";
import FeatureCard from "./component/FeatureCard";
import Footer from "./component/Footer";
function App() {
  return (
    <main className="flex flex-col gap-8 p-8">
      <Header />

      <section className="flex flex-row flex-wrap justify-center gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </section>

      <Footer />
    </main>
  );
}

export default App;
