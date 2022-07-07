import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryItemsRef = galleryItems
    .map(({ preview, original, description }) => {
        return `<div class = "gallery__item">
    <a class = "gallery__link" href = "${original}">
    <img class = "gallery__image" data-source ="${original}" src = "${preview}"
    alt = "${description}"></a></div>`;
    })
    .join("");
    
    gallery.insertAdjacentHTML("beforeend", galleryItemsRef);


const lightbox = new SimpleLightbox(".gallery a", { 
    captionsPosition: "buttom",
    captionsData: "alt",
    captionsDelay: "250",
     });

