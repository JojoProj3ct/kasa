// Import de l'image de l'étoile orange depuis le dossier assets
import starOrange from "../assets/etoile-orange.png";

// Déclaration du composant Rating
// value → prop qui indique combien d'étoiles doivent être pleines (1 à 5)
function Rating({ value }) {
  return (
    <>
      {/* Création d’un tableau de 5 éléments pour afficher 5 étoiles */}
      {Array.from({ length: 5 }).map((_, index) => (
        <img
          key={index} // clé unique pour chaque élément du tableau (obligatoire dans React)
          src={starOrange} // image de l'étoile
          alt="étoile" // texte alternatif pour l’accessibilité
          className="star" // classe CSS pour styliser l’étoile
          // style dynamique pour gérer l’opacité : étoiles pleines ou grises
          style={{ opacity: index < value ? 1 : 0.3 }}
          // Si l'index est inférieur à la valeur, étoile pleine (opacity 1)
          // Sinon étoile grisée (opacity 0.3)
        />
      ))}
    </>
  );
}

// Export du composant Rating pour pouvoir l'utiliser ailleurs
export default Rating;
