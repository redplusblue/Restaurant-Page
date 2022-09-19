import { setPage } from './page-load';
import './style.css';;
import setLayout from './page-load.js';
import { clearPage } from './page-load.js';

let current;



export const eventListeners = () => {
document.getElementById('homeButton').addEventListener('click', () => {
    if(current != 'home') {
        clearPage();
        setLayout();
        setPage('home');
        current = 'home';
    }
});

document.getElementById('menuButton').addEventListener('click', () => {
    if(current != 'menu') {
        clearPage();
        setLayout();
        setPage('menu');
        current = 'menu';
    }
});

document.getElementById('contactButton').addEventListener('click', () => {
    if(current != 'contact') {
        clearPage();
        setLayout();
        setPage('contact');
        current = 'contact';
    }
});
};

console.log('Begin!');
setLayout();