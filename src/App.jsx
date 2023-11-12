import React, { useState } from "react";

export default function App() {
  const images = [
    { src: "images/pic1.jpg", alt: "Closeup of a human eye" },
    { src: "images/pic2.jpg", alt: "Rock that looks like a wave" },
    { src: "images/pic3.jpg", alt: "Purple and white pansies" },
    { src: "images/pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
    { src: "images/pic5.jpg", alt: "Large moth on a leaf" }
  ];

  const [displayedImg, setDisplayedImg] = useState(images[0]);
  const handleThumbnailClick = (image) => {
    setDisplayedImg(image);
  };

  const [islight, setIslight] = useState(true)
  const judgelight = islight ? 'l' : 'd'
  const buttontext = islight ? 'Darken' : 'Lighten'

  const pushbutton = () => {
    setIslight(!islight)
  }

  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img
          className="displayed-img"
          src={displayedImg.src}
          alt={displayedImg.alt} // 表示画像の代替テキストを使用
        />
        <div className={judgelight}></div>
        <button onClick={pushbutton}>{buttontext}</button>
      </div>
      <div className="thumb-bar">
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt} // サムネイル画像の代替テキストを使用
            className="thumbnail"
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
    </>
  );
}



