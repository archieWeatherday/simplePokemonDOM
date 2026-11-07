//This is a very simple program that will take images and add them dynamically into the DOM.
//https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon/1.png
//Lets just start with creating the elements. I need to create new, unique img elements and then modify them and then add them to the DOM tree. (probably using 

const myContainer = document.querySelector("#container");
document.body.classList.add("pokemon");
let myImg = null;
let imgWidth = 0;
//ok. I now need to add a number line below each pokemon.i
for (let i = 1; i<=101; i++){
	myImg = document.createElement("img");
	myImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`;
	const myDiv = document.createElement("div");
	const mySecondDiv = document.createElement("div");
	const mySpan = document.createElement("span");
	mySpan.append(`#${i}`);
	mySecondDiv.append(myImg,mySpan);
	myDiv.append(mySecondDiv);
	myContainer.append(myDiv);
	//theres literally gonnabe like a 100 divs so honestly whatever.
	
	
}
//I wasnt sure how to add the numbers...so what i did is this:

//getting how many images are in one row:

