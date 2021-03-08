import { Component } from '../abstracts/Component';
import './LazyScroll.component.css';
import { Observer } from './classes/observer';
import imagesJSON from '../../../api/images.json';

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.2);
}

const CONTAINER_STYLE = 'masonry-container';
const ITEM_STYLE = 'masonry-item';

export class LazyScrollComponent extends Component {

    _observer;

    constructor() {
        super();
        
        const template = `
            <div>
                <div class="${CONTAINER_STYLE}"></div>
                <div id="observerTarget"></div>
            </div>
        `;
        this.setTemplate(template);
    }

    onInit(element) {
        const upploadTo = document.querySelector(`.${CONTAINER_STYLE}`);
        this._configureLazyScroll(upploadTo);
        this._loadImagesToNode(upploadTo);
    }
    
    destroyObserver() {
        this._observer.unsubscribe();
    }

    _loadImagesToNode(appendTo) {
        shuffleArray(imagesJSON).forEach(loadImage);
    
        function loadImage(item) {
            const image = document.createElement('img');
            image.src = item.imageUrl;
            image.alt = item.alt;
            image.className = ITEM_STYLE;
    
            appendTo.appendChild(image);
        }
    }

    _configureLazyScroll(loadImagesTo) {
        this._observer = new Observer();
        const targetElement = this._templateAsHTML.querySelector("#observerTarget");
        const scrollArea = null;
        const subscriptionFn = this._loadImagesToNode.bind(null, loadImagesTo);
    
        this._observer.init(scrollArea, subscriptionFn);
        this._observer.subscribe(targetElement);
    }
}
