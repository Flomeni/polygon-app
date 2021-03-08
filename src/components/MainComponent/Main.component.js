import { Component } from '../abstracts/Component';
import './Main.component.css';
import { LazyScrollComponent } from '../LazyScrollComponent/LazyScroll.component'

export class MainComponent extends Component {

    constructor() {
        super();

        const template = `<main class="main"></main>`;
        this.setTemplate(template);
    }

    onInit(element) {                
        const lazyScrollComponent = new LazyScrollComponent();

        lazyScrollComponent.mountTo(this._templateAsHTML);
    }

}
