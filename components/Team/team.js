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

class Team {
    constructor(items) {
        this.items = items;
        window.addEventListener('load', () => this.animate())
    }
    animate() {
        let timeline = new TimelineMax();
        this.items.forEach((item) => {
            timeline.from(item, .5, { opacity: 0 })
        })
    }
}

let teamCards = document.querySelectorAll('.team-card');

new Team(teamCards);
