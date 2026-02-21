import { useState } from "react";
import "./Carousel.scss";

// Import des images de flèche
import arrowLeft from "../assets/vector-gauche.png";
import arrowRight from "../assets/vector-droite.png";

// Déclaration du composant Carousel
// Le composant prend en props un tableau d'images : { images }
function Carousel({ images }) {
  // Déclaration d'un state "current" pour suivre l'image affichée actuellement
  // useState(0) initialise la valeur à 0 (la première image)
  const [current, setCurrent] = useState(0);

  // Récupération de la longueur du tableau d'images pour savoir combien d'images il y a
  const length = images.length;

  // Fonction pour passer à l'image suivante
  // Si on est sur la dernière image (current === length - 1), on revient à la première image (0)
  // Sinon on incrémente current de 1
  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);

  // Fonction pour revenir à l'image précédente
  // Si on est sur la première image (current === 0), on passe à la dernière image (length - 1)
  // Sinon on décrémente current de 1
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  // Vérification que "images" est bien un tableau et qu'il contient au moins une image
  // Si ce n'est pas le cas, on ne rend rien (return null)
  if (!Array.isArray(images) || images.length === 0) return null;

  // Retour du JSX pour afficher le carousel
  return (
    <div className="carousel">
      <button className="carousel-arrow left" onClick={prevSlide}>
        <img src={arrowLeft} alt="flèche gauche" />
      </button>

      <div className="carousel-image-container">
        <img
          src={images[current]}
          alt={`slide ${current}`}
          className="carousel-image"
        />
      </div>

      <button className="carousel-arrow right" onClick={nextSlide}>
        <img src={arrowRight} alt="flèche droite" />
      </button>

      <div className="carousel-counter">
        {current + 1}/{length}
      </div>
    </div>
  );
}

export default Carousel;
