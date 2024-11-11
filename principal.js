// Seleccionar el contenedor de las bolas
const iaActiveElement = document.getElementById('ia-active');

// Añadir evento de clic para activar la animación de órbita
iaActiveElement.addEventListener('click', function () {
    // Alternar la clase para iniciar la animación de vibración circular
    this.classList.toggle('active');
});

const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("planetModal");
const carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

openModal.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

document.getElementById("prev").addEventListener("click", () => {
    carouselItems[currentIndex].classList.add("hidden");
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[currentIndex].classList.remove("hidden");
});

document.getElementById("next").addEventListener("click", () => {
    carouselItems[currentIndex].classList.add("hidden");
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.remove("hidden");
});

// Lógica para el modal de Neptunianos
const openModalNeptunianos = document.getElementById("openModalNeptunianos");
const closeModalNeptunianos = document.getElementById("closeModalNeptunianos");
const modalNeptunianos = document.getElementById("planetModalNeptunianos");
const carouselItemsNeptunianos = document.querySelectorAll("#carouselNeptunianos .carousel-item");
let currentIndexNeptunianos = 0;

openModalNeptunianos.addEventListener("click", () => {
    modalNeptunianos.classList.remove("hidden");
});

closeModalNeptunianos.addEventListener("click", () => {
    modalNeptunianos.classList.add("hidden");
});

document.getElementById("prevNeptunianos").addEventListener("click", () => {
    carouselItemsNeptunianos[currentIndexNeptunianos].classList.add("hidden");
    currentIndexNeptunianos = (currentIndexNeptunianos - 1 + carouselItemsNeptunianos.length) % carouselItemsNeptunianos.length;
    carouselItemsNeptunianos[currentIndexNeptunianos].classList.remove("hidden");
});

document.getElementById("nextNeptunianos").addEventListener("click", () => {
    carouselItemsNeptunianos[currentIndexNeptunianos].classList.add("hidden");
    currentIndexNeptunianos = (currentIndexNeptunianos + 1) % carouselItemsNeptunianos.length;
    carouselItemsNeptunianos[currentIndexNeptunianos].classList.remove("hidden");
});

// Lógica para el modal de SuperTerrestres
const openModalSuperTerrestres = document.getElementById("openModalSuperTerrestres");
const closeModalSuperTerrestres = document.getElementById("closeSuperTerrestresModal");
const modalSuperTerrestres = document.getElementById("superTerrestresModal");
const carouselItemsSuperTerrestres = document.querySelectorAll("#carouselSuperTerrestres .carousel-item");
let currentIndexSuperTerrestres = 0;

openModalSuperTerrestres.addEventListener("click", () => {
    modalSuperTerrestres.classList.remove("hidden");
});

closeModalSuperTerrestres.addEventListener("click", () => {
    modalSuperTerrestres.classList.add("hidden");
});

document.getElementById("prevSuperTerrestres").addEventListener("click", () => {
    carouselItemsSuperTerrestres[currentIndexSuperTerrestres].classList.add("hidden");
    currentIndexSuperTerrestres = (currentIndexSuperTerrestres - 1 + carouselItemsSuperTerrestres.length) % carouselItemsSuperTerrestres.length;
    carouselItemsSuperTerrestres[currentIndexSuperTerrestres].classList.remove("hidden");
});

document.getElementById("nextSuperTerrestres").addEventListener("click", () => {
    carouselItemsSuperTerrestres[currentIndexSuperTerrestres].classList.add("hidden");
    currentIndexSuperTerrestres = (currentIndexSuperTerrestres + 1) % carouselItemsSuperTerrestres.length;
    carouselItemsSuperTerrestres[currentIndexSuperTerrestres].classList.remove("hidden");
});

// Lógica para el modal de Terrestres
const openModalTerrestres = document.getElementById("openModalTerrestres");
const closeModalTerrestres = document.getElementById("closeModalTerrestres");
const modalTerrestres = document.getElementById("planetModalTerrestres");
const carouselItemsTerrestres = document.querySelectorAll("#carouselTerrestres .carousel-item");
let currentIndexTerrestres = 0;

openModalTerrestres.addEventListener("click", () => {
    modalTerrestres.classList.remove("hidden");
});

closeModalTerrestres.addEventListener("click", () => {
    modalTerrestres.classList.add("hidden");
});

document.getElementById("prevTerrestres").addEventListener("click", () => {
    carouselItemsTerrestres[currentIndexTerrestres].classList.add("hidden");
    currentIndexTerrestres = (currentIndexTerrestres - 1 + carouselItemsTerrestres.length) % carouselItemsTerrestres.length;
    carouselItemsTerrestres[currentIndexTerrestres].classList.remove("hidden");
});

document.getElementById("nextTerrestres").addEventListener("click", () => {
    carouselItemsTerrestres[currentIndexTerrestres].classList.add("hidden");
    currentIndexTerrestres = (currentIndexTerrestres + 1) % carouselItemsTerrestres.length;
    carouselItemsTerrestres[currentIndexTerrestres].classList.remove("hidden");
});