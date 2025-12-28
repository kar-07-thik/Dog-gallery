import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DogCard from "./components/DogCards.js"
//import Images
import dog1 from "./assests/images/dog1.png"
import dog2 from "./assests/images/dog2.avif"
import dog3 from "./assests/images/dog3.jpg"
import dog4 from "./assests/images/dog4.jpg"
import dog5 from "./assests/images/dog5.jpg"
import dog6 from "./assests/images/dog6.webp"
import dog7 from "./assests/images/dog7.webp"
import dog8 from "./assests/images/dog8.jpg"
//components

let dogs = [
  {
    image: dog1,
    name: "Golden Retriever"
  },
  {
    image: dog2,
    name: "Germen Shepherd"
  },
  {
    image: dog3,
name: "Spitz"
  },
  {
    image: dog4,
    name: "Maltese"
  },
    {
    image: dog5,
    name: "Chihuahuas"
  },
    {
    image: dog6,
    name: "Husky"
  },
    {
    image: dog7,
    name: "Weimaraner"
  },
    {
    image: dog8,
    name: "French Bullbog"
  }
]
const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(
 <div className="container">
  {
    dogs.map(function(item){
      return <DogCard DogImage={item.image} DogName={item.name}></DogCard>
    })
  }
 </div>
)
