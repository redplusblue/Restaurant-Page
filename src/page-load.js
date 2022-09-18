export default function setLayout(){
    const content = document.createElement('div');
    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
    document.body.appendChild(content);
    content.id = 'content';
    header.id = 'header';
    main.id = 'main';
    footer.id = 'footer';
    setHeader();
    setMain();
};

function setHeader(){
    const header = document.getElementById('header');
    const headerText = document.createElement('h1');
    headerText.innerHTML = 'Restaurant';
    header.appendChild(headerText);
    headerText.id = 'headerText';
}

function setMain(){
    const main = document.getElementById('main');
    const nav = document.createElement('nav');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');
    home.innerText = 'Home';
    menu.innerText = 'Menu';
    contact.innerText = 'Contact';
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    main.appendChild(nav);
    nav.id = 'nav';
}