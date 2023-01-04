let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homePoints = 0
let guestPoints = 0


//----- HOME SECTION -----//

function add1Home() {
    homePoints = homePoints + 1
    homeEl.textContent = homePoints
}

function add2Home() {
    homePoints = homePoints + 2
    homeEl.textContent = homePoints
}

function add3Home() {
    homePoints = homePoints + 3
    homeEl.textContent = homePoints
}


//----- GUEST SECTION -----//

function add1Guest() {
    guestPoints = guestPoints + 1
    guestEl.textContent = guestPoints
}

function add2Guest() {
    guestPoints = guestPoints + 2
    guestEl.textContent = guestPoints
}

function add3Guest() {
    guestPoints = guestPoints + 3
    guestEl.textContent = guestPoints
}