// export default Home;

import Banner from "../components/Banner";
import banner1 from "../assets/banner1.jpg"; // image pour le Banner
import Card from "../components/Card";
import logements from "../data/logements.json"; // JSON des logements
import "./Home.scss"; // styles pour la page Home

function Home() {
  return (
    <>
      {/* Banner avec image et texte */}
      <Banner image={banner1} text="Chez vous, partout et ailleurs" />

      {/* Container des cards */}
      <div className="cards-container">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
