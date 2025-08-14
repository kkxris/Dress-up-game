import { use, useEffect, useState } from "react";
import "./App.css";

function App() {
  const faces = ["/face1.png", "/face2.png", "/face3.png","/face4.png","/face5.png"];
  const hairs = ["/hair1.png", "/hair2.png", "/hair3.png", "/hair4.png", "/hair5.png", "/hair6.png"];
  const dresses = [
    "/dress1.png",
    "/dress2.png",
    "/dress3.png",
    "/dress4.png",
    "/dress5.png",
  ];
  const bodies = ["/body.png","/body2.png","/body3.png","/body4.png","/body5.png"];
  const shoes = ["/shoes1.png", "/shoes2.png", "/shoes3.png",""];
  const hats = ["/hat1.png", "/hat2.png", "/hat3.png", "/hat4.png", "/hat5.png"];

  const [faceIndex, setFaceIndex] = useState(0);
  const [hairIndex, setHairIndex] = useState(0);
  const [dressIndex, setDressIndex] = useState(0);
  const [bodyIndex, setBodyIndex] = useState(0);
  const[shoesIndex,setShoesIndex]=useState(0);
  const[hatsIndex,setHatsIndex]=useState(0);

useEffect(()=>{
  const saved = 
  JSON.parse(localStorage.getItem("dressupData"));
  if(saved){
    setBodyIndex(saved.body||0);
    setFaceIndex(saved.face||0);
    setHairIndex(saved.hair||0);
    setDressIndex(saved.dress||0);
    setShoesIndex(saved.shoe||0);
    setHatsIndex(saved.hat||0)
  }
},[]);

const saveToLocalStorage = () =>{
  const data={
    face:faceIndex,
    hair:hairIndex,
    dress:dressIndex,
    hat:hatsIndex,
    body:bodyIndex,
    shoe:shoesIndex
  };
  localStorage.setItem("dressupData",JSON.stringify(data));
  alert("saved!");
};
  const cycle = (index, setIndex, array) => {
    setIndex((prev) => (prev + 1) % array.length);
  };
  return (
    <div>
      <h2>Dress-up game</h2>
     
    <div className="container">
     
      <div className="character">
        <img src="/body2.png" alt="Character" className="layer" />
        <img src={faces[faceIndex]} style={{position:'absolute',zIndex:2}}  className="layer" id="face-img" />
        <img src={hairs[hairIndex]} style={{position:'absolute',zIndex:3}}  className="layer" id="hair-img"/>
        <img src={dresses[dressIndex]} style={{position:'absolute',zIndex:4}}  className="layer" id="dress-img"/>
        <img src={bodies[bodyIndex]} style={{position:'absolute',zIndex:1}}  className="layer" id="body-img"/>
        <img src={shoes[shoesIndex]} style={{position:'absolute',zIndex:6}}  className="layer" id="shoe-img" />
        <img src={hats[hatsIndex]} style={{position:'absolute',zIndex:7}} className="layer" id="hat-img" />
      </div>
 
      <div className="controls">{/*these nbsp are used to give spces on the text in the button so they look niceee and aligneddd giggtyyy giggtyy*/}
        <button onClick={() => cycle(faceIndex, setFaceIndex, faces)}>
          &nbsp;&nbsp;&nbsp;Next Face&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
        <button onClick={() => cycle(hairIndex, setHairIndex, hairs)}>
          &nbsp;&nbsp;&nbsp;Next Hair&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
        <button onClick={() => cycle(dressIndex, setDressIndex, dresses)}>
          &nbsp;&nbsp;&nbsp;Next Dress&nbsp;&nbsp;&nbsp;
        </button>
        <button onClick={() => cycle(bodyIndex, setBodyIndex, bodies)}>
         &nbsp;&nbsp;&nbsp;Next body&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
        <button onClick={() => cycle(shoesIndex, setShoesIndex, shoes)}>
          &nbsp;&nbsp;&nbsp;Next shoes&nbsp;&nbsp;&nbsp;
        </button>
        <button onClick={() => cycle(hatsIndex, setHatsIndex, hats)}>
          &nbsp;&nbsp;&nbsp;Next hat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
        <br />
        <button onClick={saveToLocalStorage}>&nbsp;save the outfit&nbsp;</button>
      </div>
    </div>
    </div>
  );
}

export default App;