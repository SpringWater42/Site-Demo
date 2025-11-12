// Simple Card component
function Card({ name, imageUrl, imageSize = 150, children }) {
  return (
    <div className="card">
      <h2 className="card-title">{name}</h2>
      <img className="avatar" src={imageUrl} alt={name} style={{ width: imageSize, height: imageSize }} />
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;