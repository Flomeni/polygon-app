function parseHTMLFromString(htmlString) {
    const parser = new DOMParser();
    const document = parser.parseFromString(htmlString, 'text/html');
    
    return document.body.firstElementChild;
}

export class Component {

    _template;
    
    _styles;

    _templateAsHTML;

    constructor(template = null, styles = null) {
        this._template = template;
        this._styles = styles;
        this._templateAsHTML = template ? parseHTMLFromString(template) : null;
    }

    /**
     * Lifcecycle hook. Triggers after Component has been mounted.
     * @param {element} - element where current component is mounted.
     */
    onInit(element) {

    }

    /**
     * 
     * @param {element} HTMLElement 
     */
    mountTo(element) {
        // proc init hook after append
        element.append(this._templateAsHTML);
        this.onInit(element);
    }

    getTemplate() {
        return this._template;
    }

    setTemplate(template) {
        if (!template || typeof template !== 'string') {
            throw new Error('Please provide correct stringified template.');
        }

        this._template = template;
        this._templateAsHTML = parseHTMLFromString(template);
    }

    getTemplateAsHTML() {
        return this._templateAsHTML;
    }
}
