const data = [
    {
        titleCard: 'Sky Bridge Hike',
        imgCard: '/assets/explore.jpg',
        descCard: 'Take a hike on a bridge to view the world from above.'
    },
    {
        titleCard: 'Horseback Riding',
        imgCard: '/assets/horse.jpg',
        descCard: 'Why trek? Explore the beautiful landscape while horseback riding.'
    },
    {
        titleCard: 'Food Tour',
        imgCard: '/assets/food.jpg',
        descCard: 'Give your tastebuds a treat. Discover the various cuisines Italy has to offer.'
    },
    {
        titleCard: 'Sky Diving',
        imgCard: '/assets/sky-diving.jpg',
        descCard: 'Pump up your andrenalin. Cross an item off your bucketlist and go skydiving!'
    } 
]

const feature = document.querySelector('.cards')

class CreateExperience {
    constructor(obj) {
        this.details = obj
        const card = document.createElement('div');
        const cardTitle = document.createElement('div');
        const title = document.createElement('h4');
        const cardImg = document.createElement('div');
        const img = document.createElement('img');
        const cardDesc = document.createElement('div');
        const btn = document.createElement('button');

        card.classList.add('card');
        cardTitle.classList.add('card-title');
        cardImg.classList.add('card-image');
        cardDesc.classList.add('card-desc');
    
        cardTitle.innerText = obj.titleCard;
        img.setAttribute("src", obj.imgCard);
        cardDesc.innerText = obj.descCard;

        btn.innerText = 'View Details';

        card.append(cardTitle);
        cardTitle.append(title);
        card.append(cardImg);
        cardImg.append(img);
        card.append(cardDesc);
        card.append(btn);
        feature.append(card);
    }
}

let horseTitle = 'Horseback Riding';
let horseImg = '/assets/horse.jpg';
let horseDesc = 'Why trek? Explore the beautiful landscape while horseback riding.'

data.forEach(obj => {
    new CreateExperience(obj)
});