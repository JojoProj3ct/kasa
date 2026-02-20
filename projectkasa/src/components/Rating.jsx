import starOrange from "../assets/etoile-orange.png";

function Rating({ value }) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <img
          key={index}
          src={starOrange}
          alt="étoile"
          className="star"
          style={{ opacity: index < value ? 1 : 0.3 }}
        />
      ))}
    </>
  );
}

export default Rating;
