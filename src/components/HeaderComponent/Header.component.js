import { Component } from '../abstracts/Component';
import './Header.component.css';

export class HeaderComponent extends Component {

    constructor() {
        super();
        
        const template = `
            <header class="header">
                <h1>Lazy loading</h1>
            </header>
        `;
        this.setTemplate(template);
    }

}
