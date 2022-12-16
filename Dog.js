class Dog {
    constructor(dogId, dogObject) {
        this.dogId = dogId
        Object.assign(this, dogObject)
    }
    getDogHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked, dogId } = this
            return `
                <main class="main" id="main">
                    <img class="dog-img" src="./${avatar}" alt="">
                    <div class="dog-info">
                        <div class="name-age">
                            <span class="dog-name">${name}</span>, <span class="dog-age">${age}</span>
                        </div>
                        <div class="dog-text">${bio}</div>
                    </div>
                    <img class="badge badge-left" src="./images/badge-nope.png">
                    <img class="badge badge-right" src="./images/badge-like.png">
                </main>
                 <footer class="footer" id="footer">
                    <div class="left swipe" 
                         data-dog-id=${dogId} 
                         data-btn-type="left">
                    </div>
                    <div class="right swipe" 
                         data-dog-id=${dogId} 
                         data-btn-type="right">
                    </div>
                </footer>
                
                `
    }
}

export default Dog