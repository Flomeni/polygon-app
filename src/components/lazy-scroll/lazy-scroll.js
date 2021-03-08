export class LazyScrollComponent {

    _observer;

    constructor() {
        this._observer = null;
    }

    init(scrollArea, subscriptionFn) {
        const options = {
            root: scrollArea,
            rootMargins: "0px",
            treshold: 1
        };
        
        this._observer = new IntersectionObserver(intersectionHandler, options);
        
        function intersectionHandler(entries) {
            if (entries[0].isIntersecting) {
                subscriptionFn();
            }
        }
    }

    subscribe(targetElement) {
        this._observer.observe(targetElement);
    }
}
