class Search {
    constructor(element) {
        this.element = element;
        this.navbar = document.querySelector('.search-bar');
        this.element.addEventListener('click', ()=> this.toggle());
    }
    toggle() {
        this.navbar.classList.add('show');
    }
}

let links = document.querySelectorAll('.nav-menu > a');
let [search] = [...links].filter(link => link.innerText === 'Search');
new Search(search);


class Close {
    constructor(element) {
        this.element = element;
        this.navbar = document.querySelector('.search-bar');
        this.element.addEventListener('click', () => this.closebtn())
    }

    closebtn() {
        console.log('here');
        this.navbar.classList.remove('show')
    }
}

let closeBtn = document.querySelector('.close');
new Close(closeBtn);
