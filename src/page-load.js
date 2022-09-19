import { eventListeners } from "./index.js";

export default function setLayout(){
    const content = document.createElement('div');
    const header = document.createElement('header');
    const main = document.createElement('main');
    content.appendChild(header);
    content.appendChild(main);
    document.body.appendChild(content);
    content.id = 'content';
    header.id = 'header';
    main.id = 'main';
    setHeader();
    setMain();
    eventListeners();
}

export function clearPage(){
    document.body.innerHTML = '';
}

function setHeader(){
    const header = document.getElementById('header');
    const headerText = document.createElement('h1');
    headerText.innerHTML = 'Restaurant';
    header.appendChild(headerText);
    headerText.id = 'headerText';
}

function setMain(){
    const main = document.getElementById('main');
    //Navbar
    const nav = document.createElement('nav');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');
    home.innerText = 'Home';
    home.id = 'homeButton';
    menu.innerText = 'Menu';
    menu.id = 'menuButton';
    contact.innerText = 'Contact';
    contact.id = 'contactButton';
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    main.appendChild(nav);
    nav.id = 'nav';
}

export const setPage = (button) => {
    if (button == 'home') {
        homePage(); 
    } else if (button == 'menu') {
        menuPage();
    } else if (button == 'contact') {
        contactPage();
    }
}

function homePage(){
    const content = document.getElementById('content');
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper';
    wrapper.innerText = 'Welcome to our restaurant!';
    content.appendChild(wrapper);
    const details = document.createElement('div');
    details.id = 'details';
    details.innerText = 'We are a restaurant that serves delicious food.';
    wrapper.appendChild(details);
    
    const preview = document.createElement('div');
    preview.id = 'preview';
    content.appendChild(preview);
    const previewImage1 = document.createElement('div');
    const previewImage2 = document.createElement('div');
    const previewImage3 = document.createElement('div');
    previewImage1.id = 'previewImage-1';
    previewImage2.id = 'previewImage-2';
    previewImage3.id = 'previewImage-3';
    preview.appendChild(previewImage1);
    preview.appendChild(previewImage2);
    preview.appendChild(previewImage3);

    const footer = document.createElement('footer');
    footer.innerText = 'The food is completely real.';
    content.appendChild(footer);
}; 

function menuPage(){
    const content = document.getElementById('content');
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper';
    wrapper.innerText = 'Menu';
    content.appendChild(wrapper);
    const menuWrapper = document.createElement('div');
    menuWrapper.id = 'menu-wrapper';
    content.appendChild(menuWrapper); 
    const food1 = document.createElement('div');
    const food2 = document.createElement('div');
    const food3 = document.createElement('div');
    const food4 = document.createElement('div');
    const food5 = document.createElement('div');
    const food6 = document.createElement('div');
    const food7 = document.createElement('div');
    const food8 = document.createElement('div');
    food1.id = 'food-1';
    food2.id = 'food-2';
    food3.id = 'food-3';
    food4.id = 'food-4';
    food5.id = 'food-5';
    food6.id = 'food-6';
    food7.id = 'food-7';
    food8.id = 'food-8';
    menuWrapper.appendChild(food1);
    menuWrapper.appendChild(food2);
    menuWrapper.appendChild(food3);
    menuWrapper.appendChild(food4);
    menuWrapper.appendChild(food5);
    menuWrapper.appendChild(food6);
    menuWrapper.appendChild(food7);
    menuWrapper.appendChild(food8);
    const footer = document.createElement('footer');
    footer.innerText = 'We have delicacies that will delight your taste buds.';
    content.appendChild(footer);
}

function contactPage(){
    const content = document.getElementById('content');
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper';
    wrapper.innerText = 'Contact';
    content.appendChild(wrapper);
    const details = document.createElement('div');
    const image = document.createElement('div');
    image.id = 'contact-image';
    wrapper.appendChild(image);
    details.id = 'details';
    details.innerHTML = 'We are located at 123 Fake Street.<br>You can call us at 123-456-7890.<br>You can also email us at fake@fake-email.com';
    wrapper.appendChild(details);
    const credits = document.createElement('div');
    credits.id = 'credits';
    credits.innerHTML = '<a href="https://github.com/redplusblue" target="_blank" rel="noopener noreferrer"><div>Made by Samir</div></a>';
    content.appendChild(credits);
    const source = document.createElement('div');
    source.id = 'source';
    source.innerHTML = 'Image credit: Pinterest, Fonts: Google Fonts'
    content.appendChild(source);
}
