//This is a very simple program that will take images and add them dynamically into the DOM.
//https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon/1.png
//Lets just start with creating the elements. I need to create new, unique img elements and then modify them and then add them to the DOM tree. (probably using 

const myContainer = document.querySelector("#container");
const myImg = document.createElement("img");
myImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/0.png";
myContainer.append(myImg);
