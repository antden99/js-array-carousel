console.log("Tutto ok");

//mi creo una lista di immagini
const listaImg = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"]
//mostro in console la lista delle immagini
console.log(listaImg);

let activeImg = 0;

const slides = document.querySelector(".slides");

console.log(listaImg, activeImg, slides);

for (let index = 0; index < listaImg.length; index++) {
    const slide = listaImg[index];
    console.log(slide);

    const markup = `<img class ="${index === activeImg ? "active" : ""} " src="./assets/img/img/${slide}" alt="" >`

    console.log(markup);

    slides.insertAdjacentHTML("beforeend", markup);
}



//creo una funzione che al click su next vada alla slide successiva del carosello
const next = document.querySelector(".next");
console.log(next);

next.addEventListener("click", function () {
    //incremento activeImage per scorrere all'immagine successiva
    activeImg++;
    console.log(activeImg);

    //aggiungo qui la condizione che se activeImg è posizionato alla lunghezza dell'array+1 deve andare all'ultima slide 
    if (activeImg > listaImg.length - 1) {
        activeImg = 0;
    }

    //seleziono la tramite la classe "active" il tag della slide corrente
    const selezionaSlide = document.querySelector(".active")
    console.log(selezionaSlide + "questa è la slide selezionata");

    //tolgo la classe "active" alla slide corrente per poi riassegnarla alla successiva"
    selezionaSlide.classList.remove("active");
    console.log(selezionaSlide);


    //qui mi vado a selezionare tutta la lista delle immagini che ha classe slides
    const listaSlides = document.querySelectorAll(".slides img");
    console.log(listaSlides);
    //qui vado a selezionare il nodo successivo della dom list a cui assegno la classe "active"
    listaSlides[activeImg].classList.add("active");
})



//creo una funzione che al click su prev vada alla slide precedente del carosello
const prev = document.querySelector(".prev");
console.log(prev);

prev.addEventListener("click", function () {
    //decremento activeImage per scorrere all'immagine precedente
    activeImg--;
    console.log(activeImg);

    //aggiungo qui la condizione che se activeImg è posizionato alla fine delle slide deve andare alla prima slide

    if (activeImg < 0) {
        activeImg = listaImg.length - 1;

    }

    //seleziono la tramite la classe "active" il tag della slide corrente
    const selezionaSlide = document.querySelector(".active")
    console.log(selezionaSlide);


    //tolgo la classe "active" alla slide corrente per poi riassegnarla alla precedente"
    selezionaSlide.classList.remove("active");
    console.log(selezionaSlide);  

    //qui mi vado a selezionare tutta la lista delle immagini che ha classe slides
    const listaSlides = document.querySelectorAll(".slides img");

    //qui vado a selezionare il nodo successivo della dom list a cui assegno la classe "active"
    listaSlides[activeImg].classList.add("active");

})
