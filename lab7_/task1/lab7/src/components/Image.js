import React, { useRef, useState } from "react";
import "../style.css";

function Image() {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [size, setSize] = useState(1);

  const addImage = () => {
    setIsVisible(true);
    setSize(1);
  };

  const increaseImage = () => {
    setSize((prevSize) => prevSize * 1.1);
  };

  const decreaseImage = () => {
    setSize((prevSize) => prevSize * 0.9);
  };

  const deleteImage = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <div>
        <button onClick={addImage} disabled={isVisible}>
          Додати
        </button>
        <button onClick={increaseImage} disabled={!isVisible}>
          Збільшити
        </button>
        <button onClick={decreaseImage} disabled={!isVisible}>
          Зменшити
        </button>
        <button onClick={deleteImage} disabled={!isVisible}>
          Видалити
        </button>
      </div>
      <a
        href="https://uk.wikipedia.org/wiki/%D0%91%D1%83%D0%BA%D0%BE%D0%B2%D0%B5%D0%BB%D1%8C"
        target="_blank"
      >
        <img
          ref={imageRef}
          id="bukovel-image"
          className={isVisible ? "" : "image-hidden"}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/The_beauty_of_Bucovel..._%D0%9A%D1%80%D0%B0%D1%81%D0%BE%D1%82%D0%B0_%D0%91%D1%83%D0%BA%D0%BE%D0%B2%D0%B5%D0%BB%D0%B8_-_panoramio.jpg/413px-The_beauty_of_Bucovel..._%D0%9A%D1%80%D0%B0%D1%81%D0%BE%D1%82%D0%B0_%D0%91%D1%83%D0%BA%D0%BE%D0%B2%D0%B5%D0%BB%D0%B8_-_panoramio.jpg"
          alt="bukovel-photo"
          style={{
            width: `${size * 30}%`,
            height: `${size * 30}%`,
          }}
        />
      </a>
    </div>
  );
}

export default Image;
