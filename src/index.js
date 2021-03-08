import './index.css';
import imagesJSON from '../api/images.json';
import { LazyScrollComponent } from './components/lazy-scroll/lazy-scroll';

const APP_ID = '#app';
const APPLICATION_NODE = document.getElementById(APP_ID);

document.addEventListener("DOMContentLoaded", () => {
    const lazyScrollComponent = new LazyScrollComponent();
    const scrollArea = null;
    const subscriptionFn = loadImagesToNode.bind(null, APPLICATION_NODE);
    const targetElement = document.querySelector("footer");

    lazyScrollComponent.init(scrollArea, subscriptionFn);
    lazyScrollComponent.subscribe(targetElement);

    loadImagesToNode(APPLICATION_NODE);
});

function loadImagesToNode(appendTo) {
    shuffleArray(imagesJSON).forEach(createImage);

    function createImage(item) {
        const ITEM_STYLE = 'masonry-item';
        const image = document.createElement('img');
        image.src = item.imageUrl;
        image.alt = item.alt;
        image.className = ITEM_STYLE;

        appendTo.appendChild(image);
    }
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.2);
}
