import "./style/meme.css";


import { useEffect, useState } from "react";

export default function Meme() {

  useEffect( () => {

    async function fetchData(){
      try {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json();
        setAllMemeImages(data.data.memes);
      } catch (error) {
        error(error)
      }
   

    }
    fetchData();
  }, []);

  // let [memeImage, setMemeImage]=useState("http://i.imgflip.com/1bij.jpg");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState([]);

  function getmemeImage() {
    // const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  

  function handlechange(event) {
    const { name, value } = event.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <>
      <div className="meme--container">
        <div className="form">
          <input
            className="form--inputs"
            type="text"
            placeholder="top text"
            name="topText"
            value={meme.topText}
            onChange={handlechange}
          />

          <input
            className="form--inputs"
            type="text"
            placeholder="bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handlechange}
          />

          <button onClick={getmemeImage} className="form--button">
            get a new meme image
          </button>
          {/* <img src={meme.randomImage} className="meme--image" alt="" /> */}
        </div>
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" alt="" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </>
  );
}
