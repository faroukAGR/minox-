// 1. Compte à rebours pour une offre limitée (crée l'urgence)
const setupTimer = () => {
    let minutes = 15;
    let seconds = 0;
    
    // On pourrait afficher ça dans une bannière en haut
    console.log("L'offre promotionnelle expire bientôt !");
};

// 2. Message de confirmation au clic sur le bouton d'achat
const buyButtons = document.querySelectorAll('.btn-main');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Article ajouté au panier ! Vous allez être redirigé vers le paiement sécurisé.");
    });
});

// 3. Animation du menu au défilement (scroll)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#ecf0f1';
        header.style.padding = '0.5rem 5%';
    } else {
        header.style.backgroundColor = '#fff';
        header.style.padding = '1rem 5%';
    }
});
// Liste de prénoms et villes pour les ventes fictives
const fakeSales = [
    { name: "Divine", product: "Pack 3 mois" },
    { name: "Kevin BOAD", product: "Cure Intensives" },
    { name: "Marc la rvfleuze", product: "Pack 6 mois (Promo)" },
    { name: "ipnet", product: "Spray Minoxidil 5%" }
];

// Créer l'élément HTML de la notification
const notification = document.createElement('div');
notification.className = 'sale-notification';
document.body.appendChild(notification);

function showRandomSale() {
    const sale = fakeSales[Math.floor(Math.random() * fakeSales.length)];
    
    notification.innerHTML = `
        <img src="https://flaticon.com" width="30" alt="panier">
        <div>
            <strong>${sale.name}</strong>
            <p>vient d'acheter : ${sale.product}</p>
        </div>
    `;

    // Faire apparaître
    notification.classList.add('show');

    // Faire disparaître après 5 secondes
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// Lancer la première notification après 3 secondes, puis toutes les 12 secondes
setTimeout(() => {
    showRandomSale();
    setInterval(showRandomSale, 12000);
}, 3000);
