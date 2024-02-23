console.log("Tutto ok");

//mi creo una lista di immagini
const listaImg = ["01.webp","02.webp","03.webp","04.webp","05.webp"]
//mostro in console la lista delle immagini
console.log(listaImg);

let activeImg = 0;

const slides = document.querySelector(".slides");

console.log(listaImg,activeImg,slides);

for (let index = 0; index < listaImg.length; index++) {
    const slide = listaImg[index];
    console.log(slide);

    const markup = `<img class ="${ index === activeImg ? "active" : "" } " src="./assets/img/img/${ slide }" alt="" >`

    console.log(markup);

    slides.insertAdjacentHTML("beforeend",markup);
}



//creo una funzione che al click su next vada alla slide successiva del carosello
const next = querySelector(".next");
console.log(next);












//creo una funzione che al click su prev vada alla slide precedente del carosello
const prev = querySelector(".next");
console.log(next);