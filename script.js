//accessing html elements
const img = document.querySelector('.img');
const breed = document.querySelector('.breed');
const age = document.querySelector('.age');
const input = document.querySelector('.input');
const form = document.querySelector('.form');
const ul = document.querySelector('.ul');
const button = document.querySelector('.adopt');
const url = 'http://localhost:3000/dogs'


//fetching all the dogs

const fetchDogs = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(data => dogList(data))
}


//generating list of dogs

const dogList = (data) => {
    createListItem(data)
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        searchDog(data)
    }
    )
    alertAdopt(data)
}

//function to compute search functionality

const searchDog = (data) => {
    data.map(dog => {
        if (input.value === dog.breed) {
            showDog(dog)
        }
    })
}

//function for creating list elements
const createListItem = (data) => {
    data.map(dog => {
        const li = document.createElement('li')
        li.classList.add('li')
        li.innerHTML = dog.breed
        li.addEventListener('click', () => { showDog(dog) })
        ul.appendChild(li)
    })
}

//funtion to update the DOM
const showDog = (dog) => {
    img.src = dog.image;
    breed.innerHTML = dog.breed;
    age.innerHTML = dog.age;
}

//funtion to add event listener to the button
const alertAdopt = (data) => {
    data.map(dog => {
        button.addEventListener('click', () => alertMesaage(dog))
    })
}

//function for alerting congratulations message
const alertMesaage = (dog) => {
    if (breed.innerHTML === dog.breed) {
        alert(dog.message)
    }
}

//calling the fetchData function
document.addEventListener('DOMContentLoaded', fetchDogs(url))