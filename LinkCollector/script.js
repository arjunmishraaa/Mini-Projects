// Function to load existing cards from local storage
function loadCards() {
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; // Clear current cards

    cards.forEach(card => {
        createCard(card.name, card.url, card.id);
    });
}

// Function to create a card element
function createCard(name, url, id) {
    const cardContainer = document.getElementById('cardContainer');
    
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-id', id);
    
    const cardName = document.createElement('div');
    cardName.classList.add('card-name');
    cardName.textContent = name;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '&times;';
    deleteBtn.onclick = () => deleteCard(id);
    
    card.appendChild(cardName);
    card.appendChild(deleteBtn);
    card.addEventListener('click', () => {
        window.open(url, '_blank');
    });

    cardContainer.appendChild(card);
}

// Function to delete a card
function deleteCard(id) {
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    const updatedCards = cards.filter(card => card.id !== id);
    localStorage.setItem('cards', JSON.stringify(updatedCards));

    loadCards();
}

// Show form to add a new card
document.getElementById('addCardBtn').addEventListener('click', () => {
    const form = document.getElementById('addCardForm');
    form.classList.toggle('hidden');
});

// Save new card to local storage
document.getElementById('saveCardBtn').addEventListener('click', () => {
    const cardName = document.getElementById('cardName').value;
    const cardUrl = document.getElementById('cardUrl').value;

    if (cardName && cardUrl) {
        const newCard = {
            name: cardName,
            url: cardUrl,
            id: new Date().getTime() // Unique ID for each card
        };
        
        // Get existing cards from localStorage and add the new one
        const cards = JSON.parse(localStorage.getItem('cards')) || [];
        cards.push(newCard);
        localStorage.setItem('cards', JSON.stringify(cards));

        // Reload cards and hide the form
        loadCards();
        document.getElementById('addCardForm').classList.add('hidden');
        document.getElementById('cardName').value = '';
        document.getElementById('cardUrl').value = '';
    }
});

// Load cards when the page is loaded
window.onload = loadCards;
