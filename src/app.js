import './app.css';
import { HeaderComponent } from './components/HeaderComponent/Header.component';
import { FooterComponent } from './components/FooterComponent/Footer.component';
import { MainComponent } from './components/MainComponent/Main.component';

const app = () => {    
    const APP_ID = 'app-container';
    const APPLICATION_NODE = document.getElementById(APP_ID);

    const header = new HeaderComponent();
    const main = new MainComponent();
    const footer = new FooterComponent();

    header.mountTo(APPLICATION_NODE);
    main.mountTo(APPLICATION_NODE);
    footer.mountTo(APPLICATION_NODE);
};

document.addEventListener("DOMContentLoaded", app);
