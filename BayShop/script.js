document.addEventListener("DOMContentLoaded", function () {
    // Elemente pentru filtrare
    const searchInput = document.querySelector(".search-form input");
    const container = document.querySelector(".container");
    const categories = document.querySelectorAll("#fructe, #culinarie, #jucarii");
    const footer = document.querySelector("footer");
    
    // Creare mesaj "Produsul nu a fost găsit"
    const noResultsMessage = document.createElement("p");
    noResultsMessage.textContent = "Produsul nu a fost găsit";
    noResultsMessage.style.display = "none";
    noResultsMessage.style.textAlign = "center";
    noResultsMessage.style.color = "black";
    noResultsMessage.style.fontSize = "24px";
    noResultsMessage.style.fontWeight = "bold";
    noResultsMessage.style.marginTop = "50px";
    container.appendChild(noResultsMessage);

    searchInput.addEventListener("input", function () {
        const searchText = this.value.toLowerCase();
        const products = document.querySelectorAll(".product-card");
        let hasResults = false;

        products.forEach(product => {
            const title = product.querySelector("h3").textContent.toLowerCase();
            if (title.includes(searchText)) {
                product.style.display = "block";
                hasResults = true;
            } else {
                product.style.display = "none";
            }
        });

        // Ascunde sau afișează categoriile și footer-ul
        if (searchText.length > 0) {
            categories.forEach(category => category.style.display = "none");
            footer.style.display = "none";
        } else {
            categories.forEach(category => category.style.display = "block");
            footer.style.display = "block";
        }

        // Afișează mesajul dacă nu sunt produse găsite
        noResultsMessage.style.display = hasResults ? "none" : "block";
    });
});
