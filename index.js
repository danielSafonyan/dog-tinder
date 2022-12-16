import dogs from './data.js'
import Dog from './Dog.js'

const dogObjects = dogs.map((dog, id) => new Dog(id, dog))

function getNewDog() {
    if (dogObjects.length > 0) {
        return dogObjects.shift()
    }
}

let currentDog = getNewDog()

function render() {
    document.getElementById('rendered').innerHTML = currentDog.getDogHtml()
    
}

render()

document.addEventListener('click', clickHandler)

function clickHandler(event) {
    const dataSet = event.target.dataset
    if (dataSet.btnType) {
        handleSwipeEvent(dataSet.dogId, dataSet.btnType)
    }
}

let isReady = true;

function handleSwipeEvent(dogId, swipeType) {
    if(!isReady) {
        console.log('Not ready yet!')
        return
    }
    
    dogs[dogId].hasBeenSwiped = true;
    if (swipeType === 'right') {
        dogs[dogId].hasBeenliked = true;
    }
    document.querySelector(`.badge-${swipeType}`).style.display = 'block'
    isReady = false;
    currentDog = getNewDog()
    
    setTimeout(() => {
        isReady = true;
        render()
    }, 500)
    console.log(dogs)
}