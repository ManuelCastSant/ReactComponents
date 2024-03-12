import React, { useState, useEffect } from 'react';
import './App.css';

// Importar las imágenes
import img1 from './img/ima1.jpg';
import img2 from './img/ima4.jpg';
import img3 from './img/ima3.jpg';

const Card = ({ imageName, imagePath }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [resolution, setResolution] = useState("");

  useEffect(() => {
    // Obtener la resolución original de la imagen
    const image = new Image();
    image.onload = () => {
      setResolution(`${image.width}x${image.height}`);
    };
    image.src = imagePath;
  }, [imagePath]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={imagePath} alt={imageName} />
      {isHovered && (
        <div className="overlay">
          <p>{imageName}</p>
          <p>Resolución: {resolution}</p>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Imágenes</h1>
      <div className="card-container">
        <Card imageName="Imagen 1" imagePath={img1} />
        <Card imageName="Imagen 2" imagePath={img2} />
        <Card imageName="Imagen 3" imagePath={img3} />
      </div>
    </div>
  );
}

export default App;