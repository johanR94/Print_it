
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
//Script du carousel 
//recupération des élèments html DOM
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const dots = document.querySelectorAll(".dot");

//initialisation des img et des dots
let imgIndex = 0;

//fonction pour les dots sélectionné

function updatDot(index) {
  // parcours du tableau des dots
  dots.forEach((dot, i) => {
    //ajout de la class selectionné sur le dot actuelle
    if (i === index) {
      dot.classList.add("dot_selected");
    }
    // remove du dot selectionné
    else {
      dot.classList.remove("dot_selected");
    }
  });
}
// fonction pour definir la position du carrousel
function updatCarousel() {
  //décrément de 1 sur le click de la fleche gauche
  if (imgIndex < 0) {
    //permet de retourner a la dernier image
    imgIndex = slides.length - 1;
  }
  //incrément de 1 sur le click droit
  else if (imgIndex > slides.length) {
    //permert de revenir sur la première image
    imgIndex = 0;
  }

  //modification de la source pour afficher l'image correspondant
  const imgSlides = `/Assets/images/slideshow/${slides[imgIndex].image}`;
  bannerImg.src = imgSlides;
  //modification du text de l'image  b
  const imgTag = slides[imgIndex].tagLine;
  //recupération du text a modifier
  document.querySelector("p").innerHTML = imgTag;

  // rappel de la fonction dotActu pour actualiser la position des dots
  updatDot(imgIndex);
}

// ajout d'evenement pour dectecter le click sur la fléche gauche
leftArrow.addEventListener("click", () => {
  //décrément de 1 pour avoir l'index de position
  imgIndex--;
  //  rappel de la fonction carouselPos pour actualiser la position pour modifier l'image et le text
  updatCarousel();
});

rightArrow.addEventListener("click", () => {
  //Incrément de 1 pour avoir l'index de position
  imgIndex++;
  updatCarousel();
});
