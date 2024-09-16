// JavaScript for Login Popup
const loginBtn = document.getElementById('loginBtn');
const loginPopup = document.getElementById('loginPopup');
const closeBtn = document.querySelector('.close');

loginBtn.addEventListener('click', () => {
    loginPopup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    loginPopup.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == loginPopup) {
        loginPopup.style.display = 'none';
    }
    //java script for search bar
});
function filterProperties() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementById('propertyCards').getElementsByClassName('property-card');
    
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let title = card.getElementsByTagName('h3')[0].textContent.toLowerCase();
        
        if (title.includes(input)) {
            card.style.display = ''; // Show matching properties
        } else {
            card.style.display = 'none'; // Hide non-matching properties
        }
    }
}
