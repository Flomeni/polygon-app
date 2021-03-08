import { Component } from '../abstracts/Component';
import './Footer.component.css';

export class FooterComponent extends Component {

    constructor() {
        super();
        
        const template = `
            <footer class="footer">
                <h2>Footer</h2>
            </footer>
        `;
        this.setTemplate(template);
    }

}
