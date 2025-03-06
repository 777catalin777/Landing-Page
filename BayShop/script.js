document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-form input");
    const container = document.querySelector(".container");
    const categories = document.querySelectorAll("#fructe, #culinarie, #jucarii");
    const footer = document.querySelector("footer");
    
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

        if (searchText.length > 0) {
            categories.forEach(category => category.style.display = "none");
            footer.style.display = "none";
        } else {
            categories.forEach(category => category.style.display = "block");
            footer.style.display = "block";
        }

        noResultsMessage.style.display = hasResults ? "none" : "block";
    });
});
