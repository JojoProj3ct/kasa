import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import banner2 from "../assets/banner2.jpg";
function About() {
  return (
    <>
      <Banner image={banner2} />
      <Collapse title="Fiabilité">
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale.</p>
      </Collapse>

      <Collapse title="Respect">
        <p>Le respect est une valeur fondatrice chez Kasa.</p>
      </Collapse>

      <Collapse title="Service    ">
        <p>
          La qualité du service est au cœur de notre engagement chez Kasa. Nous
          veillons à ce que chaque interaction, que ce soit avec nos hôtes ou
          nos locataires, soit empreinte de respect et de bienveillance.
        </p>
      </Collapse>
      <Collapse title="Sécurité">
        <p>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      </Collapse>
    </>
  );
}

export default About;
