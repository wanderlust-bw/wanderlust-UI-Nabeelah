class Search {
    constructor(element) {
        this.element = element;
        this.navbar = document.querySelector('.search-bar');
        this.element.addEventListener('click', ()=> this.toggle());
    }
    toggle() {
        TweenMax.from('.search-bar', 2, { opacity: 0 })
        this.navbar.classList.add('show');
    }
}

let links = document.querySelectorAll('.nav-menu > a');
let [search] = [...links].filter(link => link.innerText === 'Search');
new Search(search);


class Close {
    constructor(element) {
        this.element = element;
        this.searchbar = document.querySelector('.search-bar');
        this.element.addEventListener('click', () => this.closebtn())
    }

    closebtn() {
        this.searchbar.classList.remove('show')
    }
}

let closeBtn = document.querySelector('.close');
new Close(closeBtn);


class ToggleMenu {
    constructor(link) {
        this.link = link;
        this.navbar = document.querySelector('.nav-menu');
        this.link.addEventListener('click', () => this.toggle())
    }

    toggle() {
        this.navbar.classList.toggle('show');
    }
}

let mobileNav = document.querySelector('.mobile-nav');
new ToggleMenu(mobileNav);
